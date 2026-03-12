<script setup lang="ts">
</script>

<template>
  <div class="flex items-center justify-center w-full">
    <svg
      viewBox="0 0 400 400"
      xmlns="http://www.w3.org/2000/svg"
      class="w-full max-w-lg"
    >
      <!-- Outer border rectangle -->
      <rect
        x="10"
        y="10"
        width="380"
        height="380"
        rx="4"
        fill="none"
        stroke="#F5C200"
        stroke-width="1"
        opacity="0.3"
      />

      <!-- Row 1 -->
      <!-- Solid cube (0,0) -->
      <g transform="translate(70, 70)">
        <!-- Top face -->
        <polygon points="40,0 80,20 40,40 0,20" fill="#F5C200" />
        <!-- Left face -->
        <polygon points="0,20 40,40 40,80 0,60" fill="#2A2A2A" />
        <!-- Right face -->
        <polygon points="40,40 80,20 80,60 40,80" fill="#3A3A3A" />
      </g>

      <!-- Outline cube (0,1) -->
      <g transform="translate(170, 70)">
        <polygon points="40,0 80,20 40,40 0,20" fill="none" stroke="#F5C200" stroke-width="1.5" />
        <polygon points="0,20 40,40 40,80 0,60" fill="none" stroke="#F5C200" stroke-width="1.5" />
        <polygon points="40,40 80,20 80,60 40,80" fill="none" stroke="#F5C200" stroke-width="1.5" />
      </g>

      <!-- Solid cube (0,2) -->
      <g transform="translate(270, 70)">
        <polygon points="40,0 80,20 40,40 0,20" fill="#F5C200" />
        <polygon points="0,20 40,40 40,80 0,60" fill="#2A2A2A" />
        <polygon points="40,40 80,20 80,60 40,80" fill="#3A3A3A" />
      </g>

      <!-- Row 2 -->
      <!-- Outline cube (1,0) -->
      <g transform="translate(70, 170)">
        <polygon points="40,0 80,20 40,40 0,20" fill="none" stroke="#F5C200" stroke-width="1.5" />
        <polygon points="0,20 40,40 40,80 0,60" fill="none" stroke="#F5C200" stroke-width="1.5" />
        <polygon points="40,40 80,20 80,60 40,80" fill="none" stroke="#F5C200" stroke-width="1.5" />
      </g>

      <!-- Ring/donut (1,1) -->
      <g transform="translate(210, 210)">
        <circle cx="0" cy="0" r="35" fill="#F5C200" />
        <circle cx="0" cy="0" r="16" fill="#1C1C1C" />
      </g>

      <!-- Solid cube (1,2) -->
      <g transform="translate(270, 170)">
        <polygon points="40,0 80,20 40,40 0,20" fill="#F5C200" />
        <polygon points="0,20 40,40 40,80 0,60" fill="#2A2A2A" />
        <polygon points="40,40 80,20 80,60 40,80" fill="#3A3A3A" />
      </g>

      <!-- Row 3 -->
      <!-- Solid cube (2,0) -->
      <g transform="translate(70, 270)">
        <polygon points="40,0 80,20 40,40 0,20" fill="#F5C200" />
        <polygon points="0,20 40,40 40,80 0,60" fill="#2A2A2A" />
        <polygon points="40,40 80,20 80,60 40,80" fill="#3A3A3A" />
      </g>

      <!-- Outline cube (2,1) -->
      <g transform="translate(170, 270)">
        <polygon points="40,0 80,20 40,40 0,20" fill="none" stroke="#F5C200" stroke-width="1.5" />
        <polygon points="0,20 40,40 40,80 0,60" fill="none" stroke="#F5C200" stroke-width="1.5" />
        <polygon points="40,40 80,20 80,60 40,80" fill="none" stroke="#F5C200" stroke-width="1.5" />
      </g>

      <!-- Outline cube (2,2) -->
      <g transform="translate(270, 270)">
        <polygon points="40,0 80,20 40,40 0,20" fill="none" stroke="#F5C200" stroke-width="1.5" />
        <polygon points="0,20 40,40 40,80 0,60" fill="none" stroke="#F5C200" stroke-width="1.5" />
        <polygon points="40,40 80,20 80,60 40,80" fill="none" stroke="#F5C200" stroke-width="1.5" />
      </g>
    </svg>
  </div>
</template>
