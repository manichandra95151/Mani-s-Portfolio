import React from 'react';
import { skills } from '../Data/SkillsData';

export default function Skills() {
    return (
        <section className="py-12 px-4 md:px-6 lg:px-8">
            <h2 className="text-lg font-bold text-black mb-8 bg-[rgba(250,250,250,1)] rounded-lg p-1 text-center max-w-xs mx-auto">My Skills</h2>
            <div className="bg-[#2a2a2a] rounded-lg p-6 max-h-[500px] overflow-y-auto">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {skills.slice(0, 2).map((skillCategory) => ( // First two skill categories (Frontend, Backend)
                        <div key={skillCategory.mainHeading}>
                            <h4 className="text-lg font-bold text-white mb-2 text-center">{skillCategory.mainHeading}</h4>
                            <ul className="space-y-2">
                                {skillCategory.subSkills.map((subSkill) => {
                                    const Icon = subSkill.icon; // Extract the icon component
                                    return (
                                      <li key={subSkill.name} className="flex items-center gap-2 bg-[#3b3b3b] rounded-md px-3 py-2 hover:bg-[#4b4b4b] transition-colors">
                                      {typeof Icon === 'string' ? (
                                          <img src={Icon} alt={subSkill.name} className="w-6 h-6" /> // Render image if it's a string
                                      ) : (
                                          <Icon className="w-6 h-6" /> // Render icon component
                                      )}
                                      <span className="text-gray-300">{subSkill.name}</span>
                                  </li>
                                    );
                                })}
                            </ul>
                        </div>
                    ))}

                    {/* Grouping Tools & Methodology and Programming Languages in the third column */}
                    <div>
                        <h4 className="text-lg font-bold text-white mb-2 text-center">{skills[2].mainHeading}</h4> {/* Programming Languages */}
                        <ul className="space-y-2 mb-6">
                            {skills[2].subSkills.map((subSkill) => {
                                const Icon = subSkill.icon;
                                return (
                                    <li key={subSkill.name} className="flex items-center gap-2 bg-[#3b3b3b] rounded-md px-3 py-2 hover:bg-[#4b4b4b] transition-colors">
                                        <Icon className="w-6 h-6" />
                                        <span className="text-gray-300">{subSkill.name}</span>
                                    </li>
                                );
                            })}
                        </ul>

                        {/* Tools & Methodology */}
                        <h4 className="text-lg font-bold text-white mb-2 text-center">{skills[3].mainHeading}</h4>
                        <ul className="space-y-2">
                            {skills[3].subSkills.map((subSkill) => {
                                const Icon = subSkill.icon;
                                return (
                                    <li key={subSkill.name} className="flex items-center gap-2 bg-[#3b3b3b] rounded-md px-3 py-2 hover:bg-[#4b4b4b] transition-colors">
                                        <Icon className="w-6 h-6" />
                                        <span className="text-gray-300">{subSkill.name}</span>
                                    </li>
                                );
                            })}
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
}
