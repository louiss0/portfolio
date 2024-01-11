<script  lang="ts" setup>
import { ref, computed } from 'vue';
import type { PropType } from 'vue';
import type { Project } from '../types';
import { projectTypes } from '../types';
import ProjectCard from './ProjectCard.vue';

import { createReusableTemplate } from '@vueuse/core';

const { projects } = defineProps({
  projects: {
    type: Array as PropType<Array<Project>>,
    required: true,
  },
});


const filterChoices = ['All', ...projectTypes] as const;

type FilterChoice = (typeof filterChoices)[number]

const filter = ref<FilterChoice>('All');

const filteredProjects = computed(() =>
  filter.value === 'All'
    ? projects
    : projects.filter((project) => project.type === filter.value)
);


const [DefineFilterButtonTemplate, UseFilterButtonTemplate] = createReusableTemplate<
  {
    filterChoice: FilterChoice;
    handleFilterChoiceSent(payload: FilterChoice): void
  }
>()

const [DefineFilterButtonExpandingLineTemplate, UseFilterButtonExpandingLineTemplate] = createReusableTemplate()


</script>

<template>
  <DefineFilterButtonExpandingLineTemplate>
    <div data-position-box class="absolute bottom-0 left-0 h-px w-full">
      <div
        :class="[
          'bg-current h-full',
          'transition-transform duration-200 ease-in',
          'scale-x-0 group-hover:scale-x-100 group-focus:scale-x-100',
        ]">
        <!-- the line that expands parent is  when hovered -->
      </div>
    </div>
  </DefineFilterButtonExpandingLineTemplate>

  <DefineFilterButtonTemplate v-slot="{ handleFilterChoiceSent, filterChoice }">
    <button
      :class="[
        'group relative',
        'focus:outline-none hover:border-none',
        '[&:is(:hover,:focus)]:text-slate-900 dark:[&:is(:hover,:focus)]:bg-slate-50  ',
      ]"
      @click="handleFilterChoiceSent(filterChoice)">
      <div data-content class="min-w-[9rem] py-2 px-6 md:py-3 md:px-9">
        <span>{{ filterChoice }}</span>
      </div>
      <UseFilterButtonExpandingLineTemplate />
    </button>
  </DefineFilterButtonTemplate>


  <div class="grid sm:grid-cols-2 lg:grid-cols-4">
    <UseFilterButtonTemplate
      v-for="filterChoice of filterChoices"
      :filter-choice="filterChoice"
      :handle-filter-choice-sent="(choice) => filter = choice" />
  </div>

  <div class="grid gap-2 lg:gap-2 lg:grid-cols-2">
    <template v-if="filteredProjects.length !== 0">

      <ProjectCard
        v-for="project of filteredProjects"
        :description="project.description"
        :key="project.title"
        :slug="project.slug"
        :title="project.title"
        :url="project.url"
        :image-metadata="project.image" />

    </template>
    <div v-else>
      There are no {{ filter }}'s yet
    </div>
  </div>
</template>



