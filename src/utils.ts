import { type CollectionKey, type CollectionEntry } from "astro:content";
import { COLLECTION_NAMES, type AllCollectionNames, type AllCollectionNamesValues } from "./collections";
import { getCollections } from "@forastro/utilities";
import type { MarkdownHeading } from "astro";



export const isSpaced = (value: string) => /\s/gm.test(value)

export const aWordWithOnlyLettersAndStartsWithUppercase =
    (value: string) => /^(?:[A-Z][a-z]*)$/.test(value)

export const isCapitalized = (value: string) =>
    value
        .split(" ")
        .every(aWordWithOnlyLettersAndStartsWithUppercase)


export function isAPunctualParagraph(value: string) {

    const isProperParagraphRE =
        /^(?<first_word>[A-Z](?:[a-z]+)?)(?<middle_words>(?:\s?[\w#?.@,!"':;-]+)+)(?<last_word>\s\w+[.!?])$/g


    return isProperParagraphRE.test(value)


}

export const curryFunctionToCallWithOppositeBoolean = (
    cb: (...args: Array<NonNullable<unknown>>) => boolean) =>
    (...args: Array<NonNullable<unknown>>) => !cb(...args)





type FilterFunction<T extends ReadonlyArray<CollectionKey>, U extends CollectionEntry<T[number]>> =
    ((entry: CollectionEntry<T[number]>) => unknown)
    | ((entry: CollectionEntry<T[number]>) => entry is U)



interface GetAllCollections {
    <U extends CollectionEntry<AllCollectionNamesValues>>(
        filter?: (entry: CollectionEntry<AllCollectionNamesValues>) => entry is U
    ): Promise<Array<U>>;
    (
        filter?: (entry: CollectionEntry<AllCollectionNamesValues>) => unknown
    ): Promise<
        Array<
            CollectionEntry<AllCollectionNamesValues>
        >
    >
}


export const getAllCollections: GetAllCollections =
    async <U extends CollectionEntry<AllCollectionNamesValues>>
        (filter?: FilterFunction<AllCollectionNames, U>) =>
        await getCollections(COLLECTION_NAMES, filter)

export const attemptToCreateSpacedStringFromLowerCaseAndDashedFileNameByCapturingTheFilenameAndExtension =
    (fileName: string) => {

        const fileNameAndExtensionMatchGroups = fileName.match(/(?<file_name>[\w-]+)(?<extension>\.[a-z]+)/)?.groups

        if (!fileNameAndExtensionMatchGroups) {

            throw new Error(`Please use a proper file name and extension in your file name.
            File names are expected to be dashed and lowercase.`)

        }

        const { file_name } = fileNameAndExtensionMatchGroups

        return file_name.split('-')
            .map((word) => `${word[0].toUpperCase()}${word.slice(1)}`)
            .join(' ')

    }

export type MarkdownHeadingWithSubHeadings = MarkdownHeading & {
    subHeadings: Array<MarkdownHeadingWithSubHeadings>;
};

export const buildTableOfContentsData = (headings: Array<MarkdownHeading>, topDepth: 1 | 2 = 2) => {

    const parentHeadingMap = new Map<number, MarkdownHeadingWithSubHeadings>()

    return headings.reduce((headingsWithSubHeadingsList: Array<MarkdownHeadingWithSubHeadings>, heading) => {

        const headingsWithSubheadings: MarkdownHeadingWithSubHeadings = {
            ...heading,
            subHeadings: []
        }


        parentHeadingMap.set(heading.depth, headingsWithSubheadings)

        if (heading.depth > topDepth) {

            parentHeadingMap.get(heading.depth - 1)
                ?.subHeadings.push(headingsWithSubheadings)

            return headingsWithSubHeadingsList

        }

        headingsWithSubHeadingsList.push(headingsWithSubheadings)

        return headingsWithSubHeadingsList

    },
        [] as Array<MarkdownHeadingWithSubHeadings>
    )

}
