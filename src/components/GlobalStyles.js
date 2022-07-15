import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    *{
              /* width */
::-webkit-scrollbar {
  width: 10px;
}

/* Track */
::-webkit-scrollbar-track {
  background: #CDDDDD;
}

/* Handle */
::-webkit-scrollbar-thumb {
    background: #647678;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
    background: #647678;
 
}
    }
    }
    html{

    body{
        background-color: #2E2F2F;
        h2, h3, h4, h5, h1, p{
            color: white;
            text-shadow: 1px 1px black;
        }
        .carouselWidth{
            width: 100%;
        }
        .css-19fv6u5-MuiPaper-root-MuiAccordion-root{
            background-color: #051014 !important;
        }
        .MuiSvgIcon-root{
            color: white !important; 
        }
        a{
            color: inherit; /* blue colors for links too */
            text-decoration: inherit; /* no underline */
        }
        .css-4t3x6l-MuiPaper-root-MuiDrawer-paper{
            background-color:#051014 !important;
            color: white !important;
        }


        
    }
`;

export default GlobalStyles;
