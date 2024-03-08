import { MouseEventHandler, Ref, useEffect, useRef, useState } from "react";
import { Testimonial, testimonials } from "../profile-data";
import "./Testimonial.scss";

type TestimonialItemProps = {
  testimonial: Testimonial;
  itemRef: Ref<HTMLDivElement>;
  onMouseDown: MouseEventHandler<HTMLDivElement>;
  onMouseUp: MouseEventHandler<HTMLDivElement>;
};
function TestimonialItem({ testimonial, itemRef, onMouseDown, onMouseUp }: TestimonialItemProps) {
  return (
    <div className="testimonial" ref={itemRef} onMouseDown={onMouseDown} onMouseUp={onMouseUp}>
      <p className="testimonial__description">{testimonial.description}</p>
      <div className="testimonial__author">
        <img src={testimonial.picture} alt="testimonial profile" className="testimonial__profile-picture" />
        <div>
          <p className="testimonial__name">{testimonial.authorName}</p>
          <p className="testimonial__position">{testimonial.position}</p>
        </div>
      </div>
    </div>
  );
}
export default function TestimonialContainer() {
  //   const [animationTick, setAnimationTick] = useState(0);
  const [dataIndex, setDataIndex] = useState(0);
  const [animationState, setAnimationState] = useState<"paused" | "running">("running");
  const item1Ref = useRef<HTMLDivElement>(null);
  const item2Ref = useRef<HTMLDivElement>(null);
  const animationDurationSeconds = 20; //sec
  useEffect(() => {
    if (item2Ref && item2Ref.current) {
      item2Ref.current.addEventListener("animationend", () => {
        setDataIndex(dataIndex + 2);
      });
      return item2Ref.current.removeEventListener("animationend", () => {
        setDataIndex(dataIndex + 2);
      });
    }
  });

  const stopCarousal: MouseEventHandler<HTMLDivElement> = () => {
    setAnimationState("paused");
  };
  const resumeCarousal: MouseEventHandler<HTMLDivElement> = () => {
    setAnimationState("running");
  };

  return (
    <div
      className="testimonials-section__items"
      style={{
        height: Math.max(item1Ref.current?.offsetHeight || 0, item2Ref.current?.offsetHeight || 0),
      }}
    >
      <div
        className="carousal"
        style={{ animationDuration: animationDurationSeconds + "s", animationPlayState: animationState }}
      >
        <TestimonialItem
          itemRef={item1Ref}
          testimonial={testimonials[(dataIndex + testimonials.length) % testimonials.length]}
          key={dataIndex + testimonials.length}
          onMouseDown={stopCarousal}
          onMouseUp={resumeCarousal}
        />
      </div>
      <div
        className="carousal"
        style={{
          animationDelay: animationDurationSeconds / 2 + "s",
          animationDuration: animationDurationSeconds + "s",
          animationPlayState: animationState,
        }}
      >
        <TestimonialItem
          itemRef={item2Ref}
          testimonial={testimonials[(dataIndex + 1 + testimonials.length) % testimonials.length]}
          key={dataIndex + testimonials.length}
          onMouseDown={stopCarousal}
          onMouseUp={resumeCarousal}
        />
      </div>
    </div>
  );
}
