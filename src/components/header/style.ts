import styled from "styled-components";

export const StyleHeader = styled.header `
    display: flex;
    justify-content: center;

    .container_header {
        padding: 50px 0px;
        width: 80%;

        position: absolute;
        top: 0;

        display: flex;
        justify-content: space-between;

        .logo__home {
            display: flex;
            align-items: center;

            span {
                margin-left: 6px;
                font-family: "Inter", sans-serif;
                font-weight: 400;
                font-size: 14px;
                color: var(--color-white);
            }
        }

        .nav__home {
            .not_selected {
                margin-left: 61px;
                font-family: "Inter", sans-serif;
                font-weight: 400;
                font-size: 14px;
                color: var(--color-white);
                text-decoration: none; 
            }
        }

        .contact_home {
            .not_selected {
                font-family: "Inter", sans-serif;
                font-weight: 400;
                font-size: 14px;
                color: var(--color-white);
                text-decoration: none; 
            }
        }
    }
`;