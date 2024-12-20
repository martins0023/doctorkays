import React from 'react';

const BlogExcerpt: React.FC = () => {
    return (
        <div className="overflow-x-auto p-4">
            <div className="flex flex-row gap-5">
                <p className="text-black inline-block">All</p>
                <p className="text-black inline-block">Pregnancy</p>
                <p className="text-black inline-block">HIV</p>
                <p className="text-black inline-block">Diabetes</p>
                <p className="text-black inline-block">Blood Sugar</p>
                <p className="text-black inline-block">Smoking</p>
            </div>
        </div>
    );
};

export default BlogExcerpt;
