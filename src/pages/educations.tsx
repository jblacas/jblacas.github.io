import { LinkOutlined } from "@ant-design/icons";
import { config } from "../config";
import { useContext } from "react";
import { CursorContext } from "../cursor.context";

export function Educations() {
    const { educations } = config;

    const { onLinkEntered, onLinkExited } = useContext(CursorContext);


    return (
        <div className="group/list">

            {educations.map(({
                diploma, end, location, start, logoFile, siteLink
            }, index) => (
                <div key={index} className="relative pl-12 sm:pl-32 py-6 group lg:group-hover/list:opacity-50 lg:hover:!opacity-100">
                    <div className="flex">
                        <img className="object-contain mr-3" width={60} height={60} src={logoFile} />

                        {end && <time className="sm:absolute left-0 top-6 inline-flex items-center justify-center text-xs font-semibold uppercase w-20 h-6 mb-3 sm:mb-0 text-emerald-600 bg-emerald-100 rounded-full">{end}</time>}
                        {start && <time className="sm:absolute left-0 top-6 translate-y-8 inline-flex items-center justify-center text-xs font-semibold uppercase w-20 h-6 mb-3 sm:mb-0 text-emerald-600 bg-emerald-100 rounded-full">{start}</time>}
                        <div className="flex flex-col">
                            <div className="font-medium items-start text-2xl text-sky-400 mb-1 sm:mb-0 group-last:before:hidden before:absolute before:left-2 sm:before:left-0 before:h-full before:px-px before:bg-slate-300 sm:before:ml-[6.5rem] before:self-start before:-translate-x-1/2 before:translate-y-1.5 after:absolute after:left-2 sm:after:left-0 after:w-2 after:h-2 after:bg-sky-600 after:border-4 after:box-content after:border-slate-50 after:rounded-full sm:after:ml-[6.5rem] after:-translate-x-1/2 after:translate-y-1.5">{diploma}</div>
                            <div
                                className="flex sm:flex-row mb-1 text-xl font-bold text-sky-200">
                                <a onMouseEnter={onLinkEntered} onMouseLeave={onLinkExited} target="_blank" className="flexLink condensed mr-2" href={siteLink}>
                                    <span className="mr-2">{location}</span>
                                    <LinkOutlined className="link condensed" size={2} />
                                </a>

                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}