import { RefObject, useEffect, useRef, useState } from 'react';
import { Testimonial, testimonials } from '../profile-data';
import './Testimonial.scss';
import { useComponentSize } from '../utilities';

type TestimonialItemProps = {
    testimonial: Testimonial;
    itemRef: RefObject<HTMLDivElement>;
    onMouseDown: () => void;
    onMouseUp: () => void;
};
function TestimonialItem({
    testimonial,
    itemRef,
    onMouseDown,
    onMouseUp,
}: TestimonialItemProps) {
    return (
        <div
            className='testimonial'
            ref={itemRef}
            onMouseDown={onMouseDown}
            onTouchStart={onMouseDown}
            onMouseUp={onMouseUp}
            onTouchCancel={onMouseUp}
            onTouchEnd={onMouseUp}
        >
            <p className='testimonial__description'>
                {testimonial.description}
            </p>
            <div className='testimonial__author'>
                <img
                    src={testimonial.picture}
                    alt='testimonial profile'
                    className='testimonial__profile-picture'
                />
                <div>
                    <p className='testimonial__name'>
                        {testimonial.authorName}
                    </p>
                    <p className='testimonial__position'>
                        {testimonial.position}
                    </p>
                </div>
            </div>
        </div>
    );
}
export default function TestimonialContainer() {
    //   const [animationTick, setAnimationTick] = useState(0);
    const [dataIndex, setDataIndex] = useState(0);
    const [animationState, setAnimationState] = useState<'paused' | 'running'>(
        'running'
    );
    const item1Ref = useRef<HTMLDivElement>(null);
    const item2Ref = useRef<HTMLDivElement>(null);
    const item1Height = useComponentSize(item1Ref).height;
    const item2Height = useComponentSize(item2Ref).height;
    const animationDurationSeconds = 20; //sec
    useEffect(() => {
        if (item2Ref && item2Ref.current) {
            item2Ref.current.addEventListener('animationend', () => {
                setDataIndex(dataIndex + 2);
            });
            return item2Ref.current.removeEventListener('animationend', () => {
                setDataIndex(dataIndex + 2);
            });
        }
    });

    const stopCarousal = () => {
        setAnimationState('paused');
    };
    const resumeCarousal = () => {
        setAnimationState('running');
    };

    return (
        <div
            className='testimonials-section__items'
            style={{
                height: Math.max(item1Height, item2Height) + 'px',
            }}
        >
            <div
                className='carousal'
                style={{
                    animationDuration: animationDurationSeconds + 's',
                    animationPlayState: animationState,
                }}
            >
                <TestimonialItem
                    itemRef={item1Ref}
                    testimonial={
                        testimonials[
                            (dataIndex + testimonials.length) %
                                testimonials.length
                        ]
                    }
                    key={dataIndex + testimonials.length}
                    onMouseDown={stopCarousal}
                    onMouseUp={resumeCarousal}
                />
            </div>
            <div
                className='carousal'
                style={{
                    animationDelay: animationDurationSeconds / 2 + 's',
                    animationDuration: animationDurationSeconds + 's',
                    animationPlayState: animationState,
                }}
            >
                <TestimonialItem
                    itemRef={item2Ref}
                    testimonial={
                        testimonials[
                            (dataIndex + 1 + testimonials.length) %
                                testimonials.length
                        ]
                    }
                    key={dataIndex + testimonials.length}
                    onMouseDown={stopCarousal}
                    onMouseUp={resumeCarousal}
                />
            </div>
        </div>
    );
}
