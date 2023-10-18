const Tip = ({ name }) => {
    return (
        <section className="flex">
            <div className="min-h-[23px] bg-primary1 w-[5px]"></div>
            <div className="bg-[#041C37]/50 py-[3px] px-[9px] relative min-h-[23px]">
                {name}
            </div>
        </section>
    );
};

export default Tip;
