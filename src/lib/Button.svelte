<script>
    export let type;
    export let clickHandler;

    let buttonClasses;

    switch (type) {
        case 'primary':
            buttonClasses = 'px-8 py-3 ml-auto bg-blue-300 hover:bg-blue-600 text-white uppercase rounded-md';
            break;
        case 'link':
            buttonClasses = 'text-blue-300 hover:text-blue-600';
            break;
        case 'delete':
            buttonClasses = 'px-8 py-3 text-white bg-red-200 hover:bg-red-600 uppercase rounded-md'
        case 'link-delete':
            buttonClasses = 'text-red-200 hover:text-red-600';
            break;
        default:
            buttonClasses = 'px-8 py-3 ml-auto bg-blue-300 hover:bg-blue-600 text-white rounded-md';
            break;
    }    
</script>

<button class="{buttonClasses} font-medium flex items-center transition-colors" 
    on:click={clickHandler}>
    <slot></slot>    
</button>