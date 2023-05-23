import { useTranslation } from "react-i18next";

export default function AuthLoading() {
    const { t } = useTranslation();
    return (
        <>

            <div className="OverlayReactModal" >
                <div id="auth-modal" className="Content" role="dialog" aria-modal="true">
                    <div className="container">
                        <div className="text-center">
                            <h2 className="heading">{t("Authenticating")}</h2>
                            <div className="wrapper">
                                <div className="loader">
                                    <div className="spinner"></div>
                                </div>
                                <div className="loader">
                                    <div className="spinner"></div>
                                </div>
                                <div className="loader">
                                    <div className="spinner"></div>
                                </div>
                                <div className="loader">
                                    <div className="spinner"></div>
                                </div>
                                <div className="loader">
                                    <div className="spinner"></div>
                                </div>
                                <div className="loader">
                                    <div className="spinner"></div>
                                </div>
                                <div className="loader">
                                    <div className="spinner"></div>
                                </div>
                                <div className="loader">
                                    <div className="spinner"></div>
                                </div>
                            </div>

                            <p className="paragraph">{t("Authenticating With Torus. Please Follow the instructions.")}</p>
                        </div>

                    </div>
                </div>
            </div>

            <style jsx>
                {`
         .Content{
            background: var(--settingItemBg);;         
            border-radius: 8px;
            box-shadow: 0 24px 24px rgb(0 0 0 / 24%);
            max-height: 90vh;
            max-width: 480px;
            padding:  3rem ;
    
         }
         .heading{
            margin-bottom:30px;
            color:var(--colorWhite);
         }
         .paragraph{
            color:var(--colorWhite);

         }
         .text-center{
            text-align:center;
         }
         .OverlayReactModal{
            position: fixed;
             inset: 0px;
              background-color: rgba(0, 0, 0, 0.75);
              display: flex;
              z-index:999;
              justify-content: center;
              align-items: center;
            }
    
          
          h4 {
            width: 100%;
            text-align: center;
            text-transform: capitalize;
            font-family: sans-serif;
            color: aqua;
          }
          
          .wrapper {
            margin:30px auto;
            margin-top:10px;
            width: 70px;
            height: 70px;
            border-radius: 50%;
            display: flex;
            justify-content: center;
            align-items: center;
          }
          
          .loader {
            width: 35px;
            height: 35px;
            border-radius: 50%;
            position: absolute;
          }
          
          .spinner {
            width: 5px;
            height: 5px;
            background-color: aqua;
            border-radius: 50%;
            box-shadow: 0 0 10px 0.5px aqua;
          }
          
          .loader:first-child {
            transform: rotate(120deg);
            animation: load1 2s linear 1.1s infinite;
          }
          
          .loader:nth-child(2) {
            transform: rotate(90deg);
            animation: load2 2s linear 1.2s infinite;
          }
          
          .loader:nth-child(3) {
            transform: rotate(60deg);
            animation: load3 2s linear 1.3s infinite;
          }
          
          .loader:nth-child(4) {
            transform: rotate(30deg);
            animation: load4 2s linear 1.4s infinite;
          }
          
          .loader:nth-child(5) {
            transform: rotate(10deg);
            animation: load5 2s linear 1.5s infinite;
          }
          
          .loader:nth-child(6) {
            animation: load6 2s linear 1.6s infinite;
          }
          
          .loader:nth-child(7) {
            animation: load7 2s linear 1.7s infinite;
          }
          
          .loader:last-child {
            animation: load8 2s linear 1.8s infinite;
          }
          
          @keyframes load1 {
            75% {
              opacity: 0;
            }
          
            85% {
              opacity: 0.3;
            }
          
            100% {
              transform: rotate(339deg);
              opacity: 1;
            }
          }
          
          @keyframes load2 {
            75% {
              opacity: 0;
            }
          
            85% {
              opacity: 0.3;
            }
          
            100% {
              transform: rotate(342deg);
              opacity: 1;
            }
          }
          
          @keyframes load3 {
            75% {
              opacity: 0;
            }
          
            85% {
              opacity: 0.3;
            }
          
            100% {
              transform: rotate(345deg);
              opacity: 1;
            }
          }
          
          @keyframes load4 {
            75% {
              opacity: 0;
            }
          
            85% {
              opacity: 0.3;
            }
          
            100% {
              transform: rotate(348deg);
              opacity: 1;
            }
          }
          
          @keyframes load5 {
            50% {
              opacity: 0;
            }
          
            100% {
              transform: rotate(351deg);
              opacity: 0;
            }
          }
          
          @keyframes load6 {
            50% {
              opacity: 0;
            }
          
            100% {
              transform: rotate(354deg);
              opacity: 0;
            }
          }
          
          @keyframes load7 {
            50% {
              opacity: 0;
            }
          
            100% {
              transform: rotate(357deg);
              opacity: 0;
            }
          }
          
          @keyframes load8 {
            50% {
              opacity: 0;
            }
          
            100% {
              transform: rotate(360deg);
              opacity: 0;
            }
          }
          
        `}
            </style>
        </>
    );
}
