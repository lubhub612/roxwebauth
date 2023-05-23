import styled, { css } from 'styled-components';
import { motion } from 'framer-motion';


export const Container = styled(motion.div)`
    position: relative;
    min-height: 100vh;
`;

export const Planet = styled.a`
    position: absolute;
    top: 50%;
    left: 50%;
    border: 1px solid rgba(102, 166, 229, 0.12);
    border-radius: 1000px;
    transform: translate(-50%, -50%);
    transition: border 300ms ease;

    &::before {
        position: absolute;
        content: '';
        left: 50%;
        transform: translate(-50%, -50%);
        border-radius: 100px;
        transition: transform 300ms ease;
    }

    @keyframes orbit {
        0% {
            transform: translate(-50%, -50%) rotate(0deg);
        }
        100% {
            transform: translate(-50%, -50%) rotate(-360deg);
        }
    }

    @media (min-width: 768px) {
        &:hover {
            border: 1px solid ${(props) => props.$planetColor};

            &::before {
                transform: scale(1.5) translate(-50%, -50%);
            }
        }

        &:focus {
            outline: none;
        }

        &:focus-visible {
            border: 1px solid ${(props) => props.$planetColor};

            &::before {
                transform: scale(1.5) translate(-50%, -50%);
            }
        }

        ${(props) =>
            props.$isActive
                ? css`
                      border: 1px solid ${(props) => props.$planetColor};
                      &::before {
                          transform: scale(1.5) translate(-50%, -50%);
                      }
                  `
                : ''};
    }
`;

export const Sun = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    height: 80px;
    width: 80px;
    border-radius: 1000px;
    background-image: url(./galaxy/sun.png   );
    background-size: cover;
    box-shadow: 0 0 10px 2px rgba(255, 107, 0, 0.4),
        0 0 22px 11px rgba(255, 203, 0, 0.13);
    transform: translate(-50%, -50%);
`;

export const Mercury = styled(Planet)`
    width: 100px;
    height: 100px;
    animation: orbit 7.1867343561s linear infinite;
    z-index: 100;

    &::before {
        height: 8px;
        width: 8px;
        background-image: url(./galaxy/planet-mercury.png);
        background-size: cover;
    }
`;

export const Venus = styled(Planet)`
    width: 130px;
    height: 130px;
    animation: orbit 18.4555338265s linear infinite;
    z-index: 99;

    &::before {
        height: 15px;
        width: 15px;
        background-image: url(./galaxy/planet-venus.png);
        background-size: cover;
    }
`;

export const Earth = styled(Planet)`
    width: 175px;
    height: 175px;
    animation: orbit 30s linear infinite;
    z-index: 98;

    &::before {
        width: 16px;
        height: 16px;
        background-image: url(./galaxy/planet-earth.png);
        background-size: cover;
    }
`;

export const Mars = styled(Planet)`
    width: 220px;
    height: 220px;
    animation: orbit 56.4261314589s linear infinite;
    z-index: 97;

    &::before {
        width: 12px;
        height: 12px;
        background-image: url(./galaxy/planet-mars.png);
        background-size: cover;
    }
`;

export const Jupiter = styled(Planet)`
    width: 370px;
    height: 370px;
    animation: orbit 355.7228171013s linear infinite;
    z-index: 96;

    &::before {
        width: 36px;
        height: 36px;
        background-image: url(./galaxy/planet-jupiter.png);
        background-size: cover;
    }
`;

export const Saturn = styled(Planet)`
    width: 470px;
    height: 470px;
    animation: orbit 882.6952471456s linear infinite;
    z-index: 95;

    &::before {
        width: 55px;
        height: 40px;
        background-image: url(./galaxy/planet-saturn.png);
        background-size: contain;
        background-position: center;
        background-repeat: no-repeat;
    }
`;

export const Uranus = styled(Planet)`
    width: 550px;
    height: 550px;
    animation: orbit 2512.4001967933s linear infinite;
    z-index: 94;

    &::before {
        width: 20px;
        height: 20px;
        background-image: url(./galaxy/planet-uranus.png);
        background-size: cover;
    }
`;

export const Neptune = styled(Planet)`
    width: 660px;
    height: 660px;
    animation: orbit 4911.7838624549s linear infinite;
    z-index: 93;

    &::before {
        width: 20px;
        height: 20px;
        background-image: url(./galaxy/planet-neptune.png);
        background-size: cover;
    }
`;

export const AsteroidsBelt = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    border: 1px solid rgba(102, 166, 229, 0.12);
    border-radius: 1000px;
    transform: translate(-50%, -50%);

    height: 330px;
    width: 330px;
    opacity: 0.7;
    border-color: transparent;
    overflow: hidden;
    animation: orbit 179.9558282773s linear infinite;

    &::before {
        position: absolute;
        content: '';
        left: 50%;
        transform: translate(-50%, -50%);
        top: 50%;
        height: 210px;
        width: 210px;
        background: transparent;
        border-radius: 140px !important;
        box-shadow: -111px -119px 0 -104px rgba(255, 255, 255, 0.098),
        119px -14px 0 -104px rgba(255, 255, 255, 0.336),
        -90px 64px 0 -104px rgba(255, 255, 255, 0.607),
        17px -108px 0 -104px rgba(255, 255, 255, 0.418),
        91px -91px 0 -104px rgba(255, 255, 255, 0.159),
        69px 66px 0 -104px rgba(255, 255, 255, 0.769),
        -120px -83px 0 -104px rgba(255, 255, 255, 0.088),
        28px -6px 0 -104px rgba(255, 255, 255, 0.291),
        129px 102px 0 -104px rgba(255, 255, 255, 0.586),
        -133px 53px 0 -104px rgba(255, 255, 255, 0.26),
        -77px -28px 0 -104px rgba(255, 255, 255, 0.124),
        -96px -117px 0 -104px rgba(255, 255, 255, 0.19),
        108px -66px 0 -104px rgba(255, 255, 255, 0.377),
        130px -137px 0 -104px rgba(255, 255, 255, 0.489),
        119px 125px 0 -104px rgba(255, 255, 255, 0.131),
        63px 47px 0 -104px rgba(255, 255, 255, 0.765),
        -40px -121px 0 -104px rgba(255, 255, 255, 0.809),
        85px 13px 0 -104px rgba(255, 255, 255, 0.577),
        19px 37px 0 -104px rgba(255, 255, 255, 0.893),
        -45px -142px 0 -104px rgba(255, 255, 255, 0.989),
        84px -115px 0 -104px rgba(255, 255, 255, 0.792),
        3px -107px 0 -104px rgba(255, 255, 255, 0.763),
        -75px 70px 0 -104px rgba(255, 255, 255, 0.36),
        -115px -72px 0 -104px rgba(255, 255, 255, 0.368),
        -130px -99px 0 -104px rgba(255, 255, 255, 0.456),
        94px -95px 0 -104px rgba(255, 255, 255, 0.398),
        -87px -139px 0 -104px rgba(255, 255, 255, 0.383),
        -19px 15px 0 -104px rgba(255, 255, 255, 0.229),
        -36px 15px 0 -104px rgba(255, 255, 255, 0.66),
        145px 142px 0 -104px rgba(255, 255, 255, 0.778),
        -121px -129px 0 -104px rgba(255, 255, 255, 0.13),
        67px 90px 0 -104px rgba(255, 255, 255, 0.849),
        140px 141px 0 -104px rgba(255, 255, 255, 0.599),
        -31px 27px 0 -104px rgba(255, 255, 255, 0.68),
        72px -27px 0 -104px rgba(255, 255, 255, 0.982),
        64px -78px 0 -104px rgba(255, 255, 255, 0.89),
        -107px 27px 0 -104px rgba(255, 255, 255, 0.476),
        57px -35px 0 -104px rgba(255, 255, 255, 0.544),
        -6px 73px 0 -104px rgba(255, 255, 255, 0.185),
        108px 134px 0 -104px rgba(255, 255, 255, 0.024),
        -143px -111px 0 -104px rgba(255, 255, 255, 0.464),
        27px 135px 0 -104px rgba(255, 255, 255, 0.342),
        118px -25px 0 -104px rgba(255, 255, 255, 0.12),
        105px 59px 0 -104px rgba(255, 255, 255, 0.44),
        137px -113px 0 -104px rgba(255, 255, 255, 0.2),
        54px -7px 0 -104px rgba(255, 255, 255, 0.256),
        7px -69px 0 -104px rgba(255, 255, 255, 0.518),
        141px -66px 0 -104px rgba(255, 255, 255, 0.19),
        28px -71px 0 -104px rgba(255, 255, 255, 0.533),
        -8px 4px 0 -104px rgba(255, 255, 255, 0.975),
        125px -136px 0 -104px rgba(255, 255, 255, 0.503),
        112px -136px 0 -104px rgba(255, 255, 255, 0.134),
        -110px 80px 0 -104px rgba(255, 255, 255, 0.451),
        61px -34px 0 -104px rgba(255, 255, 255, 0.127),
        10px -44px 0 -104px rgba(255, 255, 255, 0.17),
        -90px 31px 0 -104px rgba(255, 255, 255, 0.655),
        89px 94px 0 -104px rgba(255, 255, 255, 0.434),
        100px 35px 0 -104px rgba(255, 255, 255, 0.537),
        137px -111px 0 -104px rgba(255, 255, 255, 0.506),
        99px 67px 0 -104px rgba(255, 255, 255, 0.612),
        -38px -71px 0 -104px rgba(255, 255, 255, 0.285),
        -63px -3px 0 -104px rgba(255, 255, 255, 0.625),
        26px -18px 0 -104px rgba(255, 255, 255, 0.486),
        -37px -58px 0 -104px rgba(255, 255, 255, 0.956),
        -129px 57px 0 -104px rgba(255, 255, 255, 0.05),
        83px 22px 0 -104px rgba(255, 255, 255, 0.411),
        86px -75px 0 -104px rgba(255, 255, 255, 0.74),
        -32px 108px 0 -104px rgba(255, 255, 255, 0.91),
        -88px -5px 0 -104px rgba(255, 255, 255, 0.285),
        82px 58px 0 -104px rgba(255, 255, 255, 0.468),
        -100px -7px 0 -104px rgba(255, 255, 255, 0.124),
        16px -119px 0 -104px rgba(255, 255, 255, 0.693),
        40px 26px 0 -104px rgba(255, 255, 255, 0.482),
        -13px 126px 0 -104px rgba(255, 255, 255, 0.184),
        58px 73px 0 -104px rgba(255, 255, 255, 0.364),
        140px -75px 0 -104px rgba(255, 255, 255, 0.333),
        -37px 45px 0 -104px rgba(255, 255, 255, 0.597),
        136px -10px 0 -104px rgba(255, 255, 255, 0.463),
        106px 31px 0 -104px rgba(255, 255, 255, 0.918),
        -31px 0px 0 -104px rgba(255, 255, 255, 0.259),
        -104px 65px 0 -104px rgba(255, 255, 255, 0.708),
        -73px 67px 0 -104px rgba(255, 255, 255, 0.362),
        -77px -57px 0 -104px rgba(255, 255, 255, 0.571),
        66px -53px 0 -104px rgba(255, 255, 255, 0.301),
        -113px -46px 0 -104px rgba(255, 255, 255, 0.384),
        -137px 120px 0 -104px rgba(255, 255, 255, 0.772),
        -117px -32px 0 -104px rgba(255, 255, 255, 0.07),
        -26px -102px 0 -104px rgba(255, 255, 255, 0.453),
        -119px -2px 0 -104px rgba(255, 255, 255, 0.852),
        104px 2px 0 -104px rgba(255, 255, 255, 0.389),
        51px -48px 0 -104px rgba(255, 255, 255, 0.968),
        -98px -48px 0 -104px rgba(255, 255, 255, 0.001),
        -19px 71px 0 -104px rgba(255, 255, 255, 0.442),
        54px -70px 0 -104px rgba(255, 255, 255, 0.867),
        -132px 16px 0 -104px rgba(255, 255, 255, 0.128),
        -119px -18px 0 -104px rgba(255, 255, 255, 0.099),
        15px 62px 0 -104px rgba(255, 255, 255, 0.733),
        109px 45px 0 -104px rgba(255, 255, 255, 0.786),
        -99px 59px 0 -104px rgba(255, 255, 255, 0.692),
        -62px -114px 0 -104px rgba(255, 255, 255, 0.92),
        -73px -119px 0 -104px rgba(255, 255, 255, 0.988),
        -97px -128px 0 -104px rgba(255, 255, 255, 0.448),
        79px 73px 0 -104px rgba(255, 255, 255, 0.049),
        -91px 82px 0 -104px rgba(255, 255, 255, 0.081),
        -119px -27px 0 -104px rgba(255, 255, 255, 0.834),
        115px -63px 0 -104px rgba(255, 255, 255, 0.523),
        -60px -100px 0 -104px rgba(255, 255, 255, 0.269),
        -9px -65px 0 -104px rgba(255, 255, 255, 0.304),
        -128px -113px 0 -104px rgba(255, 255, 255, 0.361),
        110px -73px 0 -104px rgba(255, 255, 255, 0.572),
        -111px -23px 0 -104px rgba(255, 255, 255, 0.884),
        46px -36px 0 -104px rgba(255, 255, 255, 0.688),
        49px -107px 0 -104px rgba(255, 255, 255, 0.184),
        -138px -104px 0 -104px rgba(255, 255, 255, 0.483),
        -138px -123px 0 -104px rgba(255, 255, 255, 0.933),
        52px -111px 0 -104px rgba(255, 255, 255, 0.591),
        135px -2px 0 -104px rgba(255, 255, 255, 0.387),
        140px -15px 0 -104px rgba(255, 255, 255, 0.337),
        15px -121px 0 -104px rgba(255, 255, 255, 0.829),
        -52px -132px 0 -104px rgba(255, 255, 255, 0.691),
        92px 136px 0 -104px rgba(255, 255, 255, 0.832),
        -88px 19px 0 -104px rgba(255, 255, 255, 0.544),
        -76px -33px 0 -104px rgba(255, 255, 255, 0.987),
        -113px 92px 0 -104px rgba(255, 255, 255, 0.503),
        -119px 134px 0 -104px rgba(255, 255, 255, 0.905),
        7px 38px 0 -104px rgba(255, 255, 255, 0.562),
        -49px -72px 0 -104px rgba(255, 255, 255, 0.504),
        -122px 113px 0 -104px rgba(255, 255, 255, 0.668),
        -23px -129px 0 -104px rgba(255, 255, 255, 0.369),
        -42px -58px 0 -104px rgba(255, 255, 255, 0.564),
        12px -43px 0 -104px rgba(255, 255, 255, 0.287),
        -101px 135px 0 -104px rgba(255, 255, 255, 0.716),
        -10px -60px 0 -104px rgba(255, 255, 255, 0.984),
        109px 37px 0 -104px rgba(255, 255, 255, 0.86),
        97px -65px 0 -104px rgba(255, 255, 255, 0.393),
        92px 46px 0 -104px rgba(255, 255, 255, 0.212),
        -81px 142px 0 -104px rgba(255, 255, 255, 0.278),
        -107px 16px 0 -104px rgba(255, 255, 255, 0.651),
        93px 114px 0 -104px rgba(255, 255, 255, 0.674),
        -31px 116px 0 -104px rgba(255, 255, 255, 0.51),
        -133px 141px 0 -104px rgba(255, 255, 255, 0.585),
        52px -94px 0 -104px rgba(255, 255, 255, 0.46),
        32px 38px 0 -104px rgba(255, 255, 255, 0.832),
        93px 139px 0 -104px rgba(255, 255, 255, 0.001),
        -99px -121px 0 -104px rgba(255, 255, 255, 0.768),
        -78px 2px 0 -104px rgba(255, 255, 255, 0.221),
        35px 78px 0 -104px rgba(255, 255, 255, 0.712),
        56px 57px 0 -104px rgba(255, 255, 255, 0.03),
        21px -100px 0 -104px rgba(255, 255, 255, 0.877),
        -82px 11px 0 -104px rgba(255, 255, 255, 0.345),
        -81px -70px 0 -104px rgba(255, 255, 255, 0.655),
        61px -41px 0 -104px rgba(255, 255, 255, 0.907),
        -32px 77px 0 -104px rgba(255, 255, 255, 0.973),
        -127px -81px 0 -104px rgba(255, 255, 255, 0.427),
        37px 128px 0 -104px rgba(255, 255, 255, 0.598),
        -62px -104px 0 -104px rgba(255, 255, 255, 0.841),
        -115px -72px 0 -104px rgba(255, 255, 255, 0.306),
        -55px -68px 0 -104px rgba(255, 255, 255, 0.032),
        -32px -106px 0 -104px rgba(255, 255, 255, 0.798),
        -99px 113px 0 -104px rgba(255, 255, 255, 0.762),
        56px 143px 0 -104px rgba(255, 255, 255, 0.662),
        126px -102px 0 -104px rgba(255, 255, 255, 0.212),
        72px 42px 0 -104px rgba(255, 255, 255, 0.699),
        120px 15px 0 -104px rgba(255, 255, 255, 0.59),
        -43px -122px 0 -104px rgba(255, 255, 255, 0.861),
        5px 64px 0 -104px rgba(255, 255, 255, 0.463),
        -59px -116px 0 -104px rgba(255, 255, 255, 0.675),
        91px 91px 0 -104px rgba(255, 255, 255, 0.65),
        16px -58px 0 -104px rgba(255, 255, 255, 0.503),
        -138px 30px 0 -104px rgba(255, 255, 255, 0.123),
        81px -130px 0 -104px rgba(255, 255, 255, 0.103),
        -106px 1px 0 -104px rgba(255, 255, 255, 0.474),
        -67px 35px 0 -104px rgba(255, 255, 255, 0.243),
        86px -37px 0 -104px rgba(255, 255, 255, 0.776),
        -25px -26px 0 -104px rgba(255, 255, 255, 0.736),
        -79px -111px 0 -104px rgba(255, 255, 255, 0.109),
        -97px 102px 0 -104px rgba(255, 255, 255, 0.912),
        143px -118px 0 -104px rgba(255, 255, 255, 0.627),
        -11px -62px 0 -104px rgba(255, 255, 255, 0.378),
        88px -103px 0 -104px rgba(255, 255, 255, 0.152),
        46px -110px 0 -104px rgba(255, 255, 255, 0.158),
        92px 30px 0 -104px rgba(255, 255, 255, 0.349),
        -125px 1px 0 -104px rgba(255, 255, 255, 0.609),
        81px 87px 0 -104px rgba(255, 255, 255, 0.251),
        87px -68px 0 -104px rgba(255, 255, 255, 0.786),
        -67px 126px 0 -104px rgba(255, 255, 255, 0.498),
        103px -24px 0 -104px rgba(255, 255, 255, 0.236),
        12px 16px 0 -104px rgba(255, 255, 255, 0.934),
        -119px -3px 0 -104px rgba(255, 255, 255, 0.838),
        -35px 35px 0 -104px rgba(255, 255, 255, 0.334),
        -110px -54px 0 -104px rgba(255, 255, 255, 0.224),
        128px 134px 0 -104px rgba(255, 255, 255, 0.65),
        -128px -24px 0 -104px rgba(255, 255, 255, 0.404),
        30px -43px 0 -104px rgba(255, 255, 255, 0.502),
        -102px -63px 0 -104px rgba(255, 255, 255, 0.627),
        4px -34px 0 -104px rgba(255, 255, 255, 0.556),
        2px 53px 0 -104px rgba(255, 255, 255, 0.301),
        -3px -140px 0 -104px rgba(255, 255, 255, 0.039),
        -38px -91px 0 -104px rgba(255, 255, 255, 0.327),
        106px 114px 0 -104px rgba(255, 255, 255, 0.187),
        58px -129px 0 -104px rgba(255, 255, 255, 0.777),
        66px -42px 0 -104px rgba(255, 255, 255, 0.82),
        73px -44px 0 -104px rgba(255, 255, 255, 0.347),
        11px 3px 0 -104px rgba(255, 255, 255, 0.545),
        -38px -116px 0 -104px rgba(255, 255, 255, 0.139),
        30px 34px 0 -104px rgba(255, 255, 255, 0.432),
        -33px 50px 0 -104px rgba(255, 255, 255, 0.043),
        -93px 32px 0 -104px rgba(255, 255, 255, 0.751),
        -76px -51px 0 -104px rgba(255, 255, 255, 0.963),
        -16px -37px 0 -104px rgba(255, 255, 255, 0.971),
        -97px -32px 0 -104px rgba(255, 255, 255, 0.474),
        -72px -48px 0 -104px rgba(255, 255, 255, 0.85),
        31px 65px 0 -104px rgba(255, 255, 255, 0.716),
        43px -9px 0 -104px rgba(255, 255, 255, 0.202),
        -33px 114px 0 -104px rgba(255, 255, 255, 0.155),
        4px -107px 0 -104px rgba(255, 255, 255, 0.885),
        -55px -104px 0 -104px rgba(255, 255, 255, 0.136),
        -3px -1px 0 -104px rgba(255, 255, 255, 0.795),
        116px -79px 0 -104px rgba(255, 255, 255, 0.863),
        -86px 79px 0 -104px rgba(255, 255, 255, 0.394),
        37px -46px 0 -104px rgba(255, 255, 255, 0.434),
        23px 14px 0 -104px rgba(255, 255, 255, 0.395),
        -67px 96px 0 -104px rgba(255, 255, 255, 0.024),
        -113px 107px 0 -104px rgba(255, 255, 255, 0.496),
        -28px 24px 0 -104px rgba(255, 255, 255, 0.797),
        140px 21px 0 -104px rgba(255, 255, 255, 0.337),
        -25px 63px 0 -104px rgba(255, 255, 255, 0.675),
        -84px -63px 0 -104px rgba(255, 255, 255, 0.353),
        -100px -69px 0 -104px rgba(255, 255, 255, 0.24),
        138px -58px 0 -104px rgba(255, 255, 255, 0.328),
        -21px -101px 0 -104px rgba(255, 255, 255, 0.521),
        -140px 122px 0 -104px rgba(255, 255, 255, 0.123),
        97px 93px 0 -104px rgba(255, 255, 255, 0.26),
        13px -99px 0 -104px rgba(255, 255, 255, 0.379),
        69px 14px 0 -104px rgba(255, 255, 255, 0.717),
        -140px -1px 0 -104px rgba(255, 255, 255, 0.038),
        9px 20px 0 -104px rgba(255, 255, 255, 0.739),
        144px -90px 0 -104px rgba(255, 255, 255, 0.701),
        3px 7px 0 -104px rgba(255, 255, 255, 0.142),
        -83px 22px 0 -104px rgba(255, 255, 255, 0.169),
        -38px 68px 0 -104px rgba(255, 255, 255, 0.679),
        76px -137px 0 -104px rgba(255, 255, 255, 0.052),
        -119px -32px 0 -104px rgba(255, 255, 255, 0.915),
        26px 37px 0 -104px rgba(255, 255, 255, 0.426),
        64px 133px 0 -104px rgba(255, 255, 255, 0.5),
        -48px 132px 0 -104px rgba(255, 255, 255, 0.583),
        87px 54px 0 -104px rgba(255, 255, 255, 0.15),
        19px 84px 0 -104px rgba(255, 255, 255, 0.159),
        43px -6px 0 -104px rgba(255, 255, 255, 0.956),
        -106px 138px 0 -104px rgba(255, 255, 255, 0.318),
        91px 99px 0 -104px rgba(255, 255, 255, 0.983),
        -89px -110px 0 -104px rgba(255, 255, 255, 0.392),
        -105px 84px 0 -104px rgba(255, 255, 255, 0.379),
        -125px 131px 0 -104px rgba(255, 255, 255, 0.918),
        -84px -72px 0 -104px rgba(255, 255, 255, 0.152),
        -86px 112px 0 -104px rgba(255, 255, 255, 0.96),
        -111px 64px 0 -104px rgba(255, 255, 255, 0.781),
        -60px -122px 0 -104px rgba(255, 255, 255, 0.366),
        -26px -65px 0 -104px rgba(255, 255, 255, 0.889),
        -48px 130px 0 -104px rgba(255, 255, 255, 0.118),
        48px -109px 0 -104px rgba(255, 255, 255, 0.235),
        145px -138px 0 -104px rgba(255, 255, 255, 0.538),
        99px 93px 0 -104px rgba(255, 255, 255, 0.329),
        -76px 114px 0 -104px rgba(255, 255, 255, 0.73),
        88px 107px 0 -104px rgba(255, 255, 255, 0.954),
        116px 59px 0 -104px rgba(255, 255, 255, 0.86),
        37px -106px 0 -104px rgba(255, 255, 255, 0.055),
        -64px 44px 0 -104px rgba(255, 255, 255, 0.898),
        -92px -41px 0 -104px rgba(255, 255, 255, 0.95),
        89px 49px 0 -104px rgba(255, 255, 255, 0.746),
        -120px -109px 0 -104px rgba(255, 255, 255, 0.349),
        -92px -44px 0 -104px rgba(255, 255, 255, 0.001),
        -76px -125px 0 -104px rgba(255, 255, 255, 0.571),
        98px 93px 0 -104px rgba(255, 255, 255, 0.479),
        0px -26px 0 -104px rgba(255, 255, 255, 0.858),
        110px 112px 0 -104px rgba(255, 255, 255, 0.501),
        -26px 86px 0 -104px rgba(255, 255, 255, 0.184),
        -76px -103px 0 -104px rgba(255, 255, 255, 0.267),
        42px -70px 0 -104px rgba(255, 255, 255, 0.808),
        94px 25px 0 -104px rgba(255, 255, 255, 0.216),
        104px -84px 0 -104px rgba(255, 255, 255, 0.115),
        -81px 95px 0 -104px rgba(255, 255, 255, 0.585),
        70px -63px 0 -104px rgba(255, 255, 255, 0.868),
        -16px -138px 0 -104px rgba(255, 255, 255, 0.681),
        -52px -77px 0 -104px rgba(255, 255, 255, 0.051),
        94px 135px 0 -104px rgba(255, 255, 255, 0.312),
        -121px 78px 0 -104px rgba(255, 255, 255, 0.977),
        -127px -58px 0 -104px rgba(255, 255, 255, 0.436),
        -44px 62px 0 -104px rgba(255, 255, 255, 0.959),
        -46px -117px 0 -104px rgba(255, 255, 255, 0.348),
        -89px -85px 0 -104px rgba(255, 255, 255, 0.437),
        -49px 20px 0 -104px rgba(255, 255, 255, 0.517),
        53px 70px 0 -104px rgba(255, 255, 255, 0.952),
        -51px -32px 0 -104px rgba(255, 255, 255, 0.085),
        89px -131px 0 -104px rgba(255, 255, 255, 0.832),
        -1px -2px 0 -104px rgba(255, 255, 255, 0.175),
        -23px 103px 0 -104px rgba(255, 255, 255, 0.184),
        118px 68px 0 -104px rgba(255, 255, 255, 0.201),
        -31px -13px 0 -104px rgba(255, 255, 255, 0.385),
        -65px 33px 0 -104px rgba(255, 255, 255, 0.325),
        -89px 95px 0 -104px rgba(255, 255, 255, 0.863),
        49px 65px 0 -104px rgba(255, 255, 255, 0.777),
        125px -49px 0 -104px rgba(255, 255, 255, 0.148),
        -13px -72px 0 -104px rgba(255, 255, 255, 0.959),
        54px -84px 0 -104px rgba(255, 255, 255, 0.011),
        -15px -50px 0 -104px rgba(255, 255, 255, 0.633),
        -65px -20px 0 -104px rgba(255, 255, 255, 0.871),
        -101px -76px 0 -104px rgba(255, 255, 255, 0.669),
        -96px -10px 0 -104px rgba(255, 255, 255, 0.125),
        -106px -108px 0 -104px rgba(255, 255, 255, 0.208),
        24px 41px 0 -104px rgba(255, 255, 255, 0.202),
        -118px 27px 0 -104px rgba(255, 255, 255, 0.309),
        -4px 91px 0 -104px rgba(255, 255, 255, 0.09),
        20px 99px 0 -104px rgba(255, 255, 255, 0.258),
        123px -89px 0 -104px rgba(255, 255, 255, 0.314),
        -95px -68px 0 -104px rgba(255, 255, 255, 0.798),
        -136px -117px 0 -104px rgba(255, 255, 255, 0.877),
        -83px -131px 0 -104px rgba(255, 255, 255, 0.719),
        10px -2px 0 -104px rgba(255, 255, 255, 0.326),
        -33px 106px 0 -104px rgba(255, 255, 255, 0.313),
        -126px -92px 0 -104px rgba(255, 255, 255, 0.236),
        -64px -34px 0 -104px rgba(255, 255, 255, 0.049),
        -89px -56px 0 -104px rgba(255, 255, 255, 0.933),
        -75px -63px 0 -104px rgba(255, 255, 255, 0.326),
        -57px -141px 0 -104px rgba(255, 255, 255, 0.325),
        -83px -123px 0 -104px rgba(255, 255, 255, 0.096),
        -63px 127px 0 -104px rgba(255, 255, 255, 0.434),
        -92px -24px 0 -104px rgba(255, 255, 255, 0.522),
        120px -59px 0 -104px rgba(255, 255, 255, 0.373),
        5px 11px 0 -104px rgba(255, 255, 255, 0.007),
        51px -59px 0 -104px rgba(255, 255, 255, 0.132),
        -27px 111px 0 -104px rgba(255, 255, 255, 0.969),
        99px -7px 0 -104px rgba(255, 255, 255, 0.711),
        -42px 11px 0 -104px rgba(255, 255, 255, 0.973),
        -79px -65px 0 -104px rgba(255, 255, 255, 0.388),
        121px 43px 0 -104px rgba(255, 255, 255, 0.395),
        -34px -111px 0 -104px rgba(255, 255, 255, 0.476),
        -122px -26px 0 -104px rgba(255, 255, 255, 0.853),
        63px 139px 0 -104px rgba(255, 255, 255, 0.429),
        -100px -105px 0 -104px rgba(255, 255, 255, 0.944),
        138px -20px 0 -104px rgba(255, 255, 255, 0.929),
        80px 40px 0 -104px rgba(255, 255, 255, 0.888),
        -80px -138px 0 -104px rgba(255, 255, 255, 0.459),
        -54px -81px 0 -104px rgba(255, 255, 255, 0.927),
        -120px -107px 0 -104px rgba(255, 255, 255, 0.622),
        94px 105px 0 -104px rgba(255, 255, 255, 0.189),
        66px 90px 0 -104px rgba(255, 255, 255, 0.959),
        -121px 136px 0 -104px rgba(255, 255, 255, 0.698),
        -47px -25px 0 -104px rgba(255, 255, 255, 0.349),
        -84px 80px 0 -104px rgba(255, 255, 255, 0.027),
        123px -24px 0 -104px rgba(255, 255, 255, 0.862),
        29px 4px 0 -104px rgba(255, 255, 255, 0.791),
        -132px 95px 0 -104px rgba(255, 255, 255, 0.915),
        67px 39px 0 -104px rgba(255, 255, 255, 0.423),
        70px -109px 0 -104px rgba(255, 255, 255, 0.137),
        -6px 118px 0 -104px rgba(255, 255, 255, 0.711),
        66px -135px 0 -104px rgba(255, 255, 255, 0.184),
        -17px -37px 0 -104px rgba(255, 255, 255, 0.96),
        105px -95px 0 -104px rgba(255, 255, 255, 0.39),
        -112px 86px 0 -104px rgba(255, 255, 255, 0.75),
        -54px 51px 0 -104px rgba(255, 255, 255, 0.694),
        -30px -52px 0 -104px rgba(255, 255, 255, 0.563),
        -35px 87px 0 -104px rgba(255, 255, 255, 0.169),
        15px 51px 0 -104px rgba(255, 255, 255, 0.926),
        47px 20px 0 -104px rgba(255, 255, 255, 0.535),
        68px -74px 0 -104px rgba(255, 255, 255, 0.876),
        -95px -39px 0 -104px rgba(255, 255, 255, 0.83),
        -89px -12px 0 -104px rgba(255, 255, 255, 0.901),
        29px -20px 0 -104px rgba(255, 255, 255, 0.019),
        127px -107px 0 -104px rgba(255, 255, 255, 0.111),
        -5px 87px 0 -104px rgba(255, 255, 255, 0.208),
        -103px -57px 0 -104px rgba(255, 255, 255, 0.937),
        -49px -87px 0 -104px rgba(255, 255, 255, 0.062),
        53px 126px 0 -104px rgba(255, 255, 255, 0.611),
        108px -99px 0 -104px rgba(255, 255, 255, 0.152),
        -36px 11px 0 -104px rgba(255, 255, 255, 0.485),
        106px 21px 0 -104px rgba(255, 255, 255, 0.38),
        -138px 44px 0 -104px rgba(255, 255, 255, 0.646),
        73px -66px 0 -104px rgba(255, 255, 255, 0.984),
        111px -128px 0 -104px rgba(255, 255, 255, 0.425),
        5px -25px 0 -104px rgba(255, 255, 255, 0.709),
        -78px 109px 0 -104px rgba(255, 255, 255, 0.888),
        -55px 73px 0 -104px rgba(255, 255, 255, 0.954),
        19px -2px 0 -104px rgba(255, 255, 255, 0.11),
        -80px -9px 0 -104px rgba(255, 255, 255, 0.2),
        -104px -59px 0 -104px rgba(255, 255, 255, 0.324),
        139px -90px 0 -104px rgba(255, 255, 255, 0.03),
        -106px -92px 0 -104px rgba(255, 255, 255, 0.937),
        -21px 44px 0 -104px rgba(255, 255, 255, 0.996),
        131px -132px 0 -104px rgba(255, 255, 255, 0.6);
         ;
    }

    @keyframes orbit {
        0% {
            transform: translate(-50%, -50%) rotate(0deg);
        }
        100% {
            transform: translate(-50%, -50%) rotate(-360deg);
        }
    }
`;
