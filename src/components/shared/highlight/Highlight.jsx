const Highlight = ({ highlightData }) => {
    return (
        <div className="flex items-center">
            {highlightData?.map(({ id, number, text }) => {
                return (
                    <div
                        className="highlight flex-1 h-[143px] flex items-center justify-center"
                        key={id}
                    >
                        <div className="flex items-center gap-[16px]">
                            <h1>{number}</h1>
                            <div className="linear h-[17px] w-[17px]"></div>
                            <h6>{text}</h6>
                        </div>
                    </div>
                );
            })}
        </div>
    );
};

export default Highlight;
