import { PushpinOutlined } from "@ant-design/icons";
import { config } from "../config"

export function Experiences(): JSX.Element {
    const { experiences } = config;
    return (
        <div className="group/list">
            {experiences.map(({
                achievements, company, end, location, position, skills, start
            }, index) => (
                <div key={index} className="relative pl-12 sm:pl-32 py-6 group lg:group-hover/list:opacity-50 lg:hover:!opacity-100">
                    <div className="font-medium text-2xl text-sky-400 mb-1 sm:mb-0">{position} </div>
                    <div className="font-medium text-xl text-sky-400 mb-1 sm:mb-0">({location})</div>
                    <div
                        className="flex flex-wrap flex-row md:flex-col items-start mb-1 group-last:before:hidden before:absolute before:left-2 sm:before:left-0 before:h-full before:px-px before:bg-slate-300 sm:before:ml-[6.5rem] before:self-start before:-translate-x-1/2 before:translate-y-1.5 after:absolute after:left-2 sm:after:left-0 after:w-2 after:h-2 after:bg-sky-600 after:border-4 after:box-content after:border-slate-50 after:rounded-full sm:after:ml-[6.5rem] after:-translate-x-1/2 after:translate-y-1.5">
                        {end && <time className="mb-1 sm:mb-0 sm:absolute sm:left-0 sm:translate-y-0.5 inline-flex items-center justify-center text-xs font-semibold uppercase w-20 h-6 text-emerald-600 bg-emerald-100 rounded-full">{end}</time>}
                        {start && <time className="mb-1 sm:mb-0 ml-2 sm:ml-0 sm:absolute sm:left-0 sm:translate-y-8 inline-flex items-center justify-center text-xs font-semibold uppercase w-20 h-6 text-emerald-600 bg-emerald-100 rounded-full">{start}</time>}
                        <div className="break" />
                        <div className="text-xl font-bold text-sky-200">
                            <span className="mr-2">{company}</span>
                            <PushpinOutlined style={{
                                verticalAlign: "middle",
                            }} />
                        </div>
                    </div>

                    <ul className="list-emoji pl-5">
                    {achievements.map(achievement => (
                        <li key={achievement} className="text-slate-300 text-base leading-normal pl-1 mb-1">
                            {achievement}
                        </li>
                    ))}
                    </ul>

                    <div className="flex flex-wrap gap-2 mt-6">
                        {skills.map((skill) => (
                            <span key={skill} className="flex items-center rounded-full bg-sky-400/20 px-3 py-1 text-xs font-medium leading-5 text-sky-200">{skill}</span>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    )
}