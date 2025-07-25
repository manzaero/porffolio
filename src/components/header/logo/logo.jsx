import {Link} from "react-router-dom";
import styled from "styled-components";

const LogoContainer = ({className}) => (
    <Link to='/' className={className}>
        <img src="/assets/logo.svg" alt=""/>
    </Link>
)

export const Logo = styled(LogoContainer)`
    display: flex;
    align-items: center;
    height: 100%;
    img {
        height: 100%;
        width: auto;
        display: block;
        transition: filter 0.9s ease, transform 0.9s ease;

        &:hover {
            filter: hue-rotate(60deg) brightness(1.3) saturate(1.5);;
        }
    }
`