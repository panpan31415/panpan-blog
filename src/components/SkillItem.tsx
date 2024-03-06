import { Skill } from "../profile-data";
import "./SkillItem.scss";

type SkillItemProps = {
  skill: Skill;
};
export default function SkillItem({ skill }: SkillItemProps) {
  return (
    <div>
      <div className="skill-item__row-top">
        <p className="skill-item__skill-name">{skill.name}</p>
        <p className="skill-item__skill-value">{skill.value}%</p>
      </div>
      <div className="skill-item__progressbar">
        <div
          className="skill-item__progress"
          style={{ width: skill.value + "%" }}
        />
      </div>
    </div>
  );
}
