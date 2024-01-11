<script lang="ts" setup>
import type {
  PropType,
  Slot
} from 'vue';

import { createReusableTemplate } from '@vueuse/core';

defineProps({
  title: {
    type: String,
    required: true,
  },
  url: {
    type: String,
    required: true,
  },
  slug: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  imageMetadata: {
    type: Object as PropType<{
      src: string;
      width:number;
      height:number;
    }>,
    required: true,
  },
});


const [LinkTemplate, LinkProjector] = createReusableTemplate<
  { href: string },
  { default: Slot }
>()


</script>

<template>
  <LinkTemplate v-slot="{href, $slots}" >
<a
    class= "rounded-md px-3 py-1 inline-block shadow-sm shadow-slate-600 "
    :href="href"
>
      <component :is="$slots.default" />
</a>
  </LinkTemplate>

  <figure>
    <div data-ring-box class="shadow-lg shadow-slate-200">
      <div data-content class="grid  sm:grid-cols-[40%_auto] ">
        <div id="image-wrapper">
          <img
               class="object-fill h-full"
               :src="imageMetadata.src"
               :width="imageMetadata.width"
               :height="imageMetadata.height"
               :alt="title" />
        </div>
        <div class="flex flex-col justify-evenly gap-2 p-4">
          <div class="grid gap-2 md:gap-8 py-2 px-6">
            <span class="text-xl" v-text="title" />
            <p class="text-sm" v-text="description" />
          </div>
          <div id="project-links" class="text-xs  capitalize px-4 py-2">
            <div data-content class="flex gap-4">
              <LinkProjector :href="url">Project</LinkProjector>
              <LinkProjector :href="`/project/${slug}`">article&nbsp; &rarr;</LinkProjector>
            </div>
          </div>
        </div>
      </div>
    </div>
  </figure>
</template>

