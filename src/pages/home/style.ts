import styled from "styled-components"

export const StyleHome = styled.div `
    .section_container__home {
        height: 743px;
        background: var(--black-background);

        display: flex;
        justify-content: center;
        align-items: flex-end;

        .container_content__home {
            width: 80%;
            height: calc(100% - 128px);

            display: flex;
            flex-direction: row;
            justify-content: space-between;

            p {
                margin-top: 159px;
                font-family: "Poppins", sans-serif;
                color: var(--color-white);
                font-weight: 700;
                font-size: 40px;
                max-width: 558px;
            }

            button {
                margin-top: 57px;
                padding: 10px 23px;
                border-radius: 54px;

                border: none;
                outline: none;

                display: flex;
                align-items: center;

                font-family: "Poppins", sans-serif;
                font-weight: 500;
                font-size: 14px;

                cursor: pointer;

                span {
                    margin-right: 8px;
                }
            }

            button:hover {
                background: var(--blue-background);
                transition: .5s;
            }

        }
    }

    .section_container__body {
        height: 1169px;
        display: flex;
        justify-content: center;

        

        .container_content__body {
            width: 80%;
            height: calc(100% - 128px);

            display: flex;
            flex-direction: row;
            justify-content: space-between;

            .top_margin {
                position: relative;
                top: 180px;
            }
            
            .container_details__div {
                width: 608px;
                margin-top: 118px;

                h1 {
                    font-family: "Poppins";
                    font-weight: 700;
                    font-size: 40px;
    
                    color: var(--grey-color);
                    max-width: 267px;

                }

                .width_title {
                    max-width: 327px;
                }
                
                .container__details {
                    padding: 68px 32px;
                    margin-top: 69px;
                    width: 608px;
                    height: 451px;
    
                    background: var(--black-background);
                    box-shadow: 0px 4px 22px 0px hsla(0, 0%, 0%, 0.77);

                    h2 {
                        margin-top: 53px;
                        margin-bottom: 36px;
                        font-family: "Poppins", sans-serif;
                        font-weight: 700;
                        font-size: 30px;
                        color: var(--color-white);

                        max-width: 231px;
                    }

                    p {
                        font-family: "Poppins", sans-serif;
                        font-weight: 400;
                        font-size: 24px;
                        color: var(--color-white);

                        max-width: 544px;
                    }

                    a {
                        margin-top: 77px;
                        display: flex;
                        align-items: center;
                        text-decoration: none;
                        font-family: "Poppins", sans-serif;

                        color: var(--blue-background);

                        span {
                            margin-right: 6px;
                        }
                    }

                }
            }


        }
    }

    footer {
        .talk {
            height: 225px;

            display: flex;
            flex-direction: column;
            justify-content: flex-end;

            background: linear-gradient(180deg, #060A13 79.17%, rgba(6, 10, 19, 0) 100%);


            .container__talk {
                width: 100%;
                display: flex;
                justify-content: center;

                color: red;

                .talk_text {
                    position: relative;
                    top: 30px;
                    width: 80%;
                    display: flex;
                    justify-content: space-between;

                    .title {
                        font-family: "Poppins", sans-serif;
                        font-size: 30px;
                        font-weight: 500;
                        color: var(--color-white);
                    }

                    button {
                        padding: 0 32px;
                        border-radius: 54px;
                        border: none;

                        display: flex;
                        align-items: center;

                        cursor: pointer;

                        span {
                            margin-right: 6px;
                            font-family: "Poppins", sans-serif;
                            font-weight: 500;
                            font-size: 14px;
                        }
                    }
                }
            }
        }
        
        .contat {
            height: 264px;
        }

        .copyright {
            height: 124px;

            border-top: 1px solid #D9D9D9;
        }
    }
`;
