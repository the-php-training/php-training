<script setup lang="ts">
import { ref } from 'vue'

const isCtaHovered = ref(false)
</script>

<template>
  <div class="flex min-h-screen flex-col bg-[#1C1C1C] font-sans antialiased">
    <!-- Navbar -->
    <nav class="w-full bg-[#F5C200]">
      <div class="mx-auto flex h-[72px] max-w-7xl items-center justify-between px-6">
        <!-- Left: Logo -->
        <a href="#" class="flex items-center">
          <img
            src="/logo.png"
            alt="PHP Training"
            class="h-18 brightness-0"
          />
        </a>

        <!-- Right: Nav links -->
        <div class="flex items-center gap-7">
          <a
            href="#"
            class="text-xs font-medium uppercase tracking-[0.15em] text-black transition-opacity hover:opacity-60"
          >
            home
          </a>
          <a
            href="#"
            class="text-xs font-medium uppercase tracking-[0.15em] text-black transition-opacity hover:opacity-60"
          >
            about
          </a>
          <a
            href="#"
            class="rounded-full bg-black px-5 py-1.5 text-xs font-semibold uppercase tracking-[0.15em] text-[#F5C200] transition-colors hover:bg-[#111111]"
          >
            start
          </a>
        </div>
      </div>
    </nav>

    <!-- Hero -->
    <main class="flex flex-1 items-center">
      <div class="mx-auto grid w-full max-w-7xl gap-12 px-6 py-16 lg:grid-cols-2 lg:gap-20">
        <!-- Left column: Text content -->
        <div class="flex flex-col justify-center">
          <h1 class="text-6xl font-bold uppercase leading-[0.95] tracking-tight text-white sm:text-7xl lg:text-[7rem]">
            The Way<br />to PHP<br />Learning
          </h1>

          <!-- Decorative yellow bars -->
          <div class="mt-8 flex flex-col gap-[6px]">
            <div class="h-[3px] w-28 bg-[#F5C200]"></div>
            <div class="ml-16 h-[3px] w-28 bg-[#F5C200]"></div>
          </div>

          <!-- CTA -->
          <a
            href="#"
            class="group mt-14 inline-flex items-center gap-5"
            @mouseenter="isCtaHovered = true"
            @mouseleave="isCtaHovered = false"
          >
            <!-- Arrow icon box -->
            <span
              class="flex h-12 w-12 items-center justify-center border-2 border-[#F5C200] transition-all duration-300"
              :class="isCtaHovered ? 'bg-[#F5C200]' : 'bg-transparent'"
            >
              <svg
                viewBox="0 0 24 24"
                class="h-5 w-5 transition-colors duration-300"
                :class="isCtaHovered ? 'text-black' : 'text-[#F5C200]'"
                fill="none"
                stroke="currentColor"
                stroke-width="2.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <line x1="7" y1="17" x2="17" y2="7" />
                <polyline points="7 7 17 7 17 17" />
              </svg>
            </span>
            <span
              class="text-base font-medium uppercase tracking-[0.2em] transition-colors duration-300"
              :class="isCtaHovered ? 'text-[#F5C200]' : 'text-white'"
            >
              Start Now
            </span>
          </a>
        </div>

        <!-- Right column: Illustration -->
        <div class="flex items-center justify-center">
          <GeometricCubes />
        </div>
      </div>
    </main>

    <!-- Scroll indicator -->
    <div class="flex justify-center pb-8">
      <div class="h-12 w-[2px] animate-pulse bg-[#F5C200]"></div>
    </div>
  </div>
</template>
