
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

