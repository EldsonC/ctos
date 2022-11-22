import { createGlobalStyle } from "styled-components";

export default createGlobalStyle `
    * {
        margin: 0;
        padding: 0;
    }


    main {
        display: flex;
        flex-direction: column;
    }

    :root {
        --color-white: white;
        --black-background: #060A13;
        --blue-background: #339ACC;
        --grey-color: #212121;
    }
    
`;