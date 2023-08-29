import Icon from "@ant-design/icons/lib/components/Icon";
import { config } from "../config"
import styles from './socials.module.css';
import { useContext } from "react";
import { CursorContext } from "../cursor.context";
import Tooltip from "./tooltip";


export function SocialMedias(): JSX.Element {
    const { socialMedia } = config;

    const { onLinkEntered, onLinkExited } = useContext(CursorContext);
    
    return (
        <ul className={styles.mediaList}>
            {socialMedia &&
                socialMedia.map(({ url, name, iconComponent, tooltip }, i) => (
                <li key={i} >
                    <Tooltip tooltip={tooltip}>
                        <a href={url} aria-label={name} target="_blank" rel="noreferrer" onMouseEnter={onLinkEntered} onMouseLeave={onLinkExited}>
                            <Icon component={iconComponent} style={{ fontSize: '32px' }} />
                        </a>
                    </Tooltip>
                </li>
            ))}
        </ul>
    )
}