<template>
  <component
    :is="iconSrc"
    v-if="iconSrc"
    :key="$props.name"
    v-bind="$attrs"
    class="icon"
    v-on="$listeners"
  >
    <slot />
  </component>
</template>

<script>
export default {
  name: 'BaseIcon',
  props: {
    name: {
      type: String,
      required: true,
    },
    colour: {
      type: String,
      default: '',
    },
    stroke: {
      type: String,
      default: '',
    },
  },
  data: () => ({
    iconSrc: null,
  }),

  watch: {
    name() {
      this.loadIcon();
    },
    colour() {
      this.setColour();
    },
    stroke() {
      this.setStrokeColour();
    },
  },

  async created() {
    await this.loadIcon();
    this.setColour();
    this.setStrokeColour();
  },

  methods: {
    async loadIcon() {
      const module = await import(`~/assets/icons/${this.name}.svg`);
      this.iconSrc = module.default;
    },
    setColour() {
      if (this.colour && this.$el && 'querySelectorAll' in this.$el) {
        this.$el.querySelectorAll('path').forEach((path) => {
          path.setAttribute('fill', this.colour);
        });
      }
    },
    setStrokeColour() {
      if (this.stroke && this.$el && 'querySelectorAll' in this.$el) {
        this.$el.querySelectorAll('path').forEach((path) => {
          path.setAttribute('stroke', this.stroke);
        });
      }
    },
  },
};
</script>
