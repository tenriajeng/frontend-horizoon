import React from 'react';
import CoursesCard from './courses-card';

export default function CourseSnapScroll({ courses }) {
    return (
        <div className="scrollbar-hidden no-scrollbar flex snap-x snap-mandatory overflow-x-scroll">
            <div className="z-10 flex flex-nowrap">
                {courses.map((course, i) => (
                    <div key={i} className="snap-center pr-3">
                        <div className="h-auto max-w-xs overflow-hidden transition-shadow duration-300 ease-in-out xs:w-44 md:w-72 ">
                            <CoursesCard key={i} course={course} />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
