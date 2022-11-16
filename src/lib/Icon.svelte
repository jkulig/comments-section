<script>
    import icons from '../assets/icons.svg';

    export let name;
    export let focusable = false;
</script>

<svg class={$$props.class} {focusable}>
    <use href={`${icons}#${name}`} />
</svg>