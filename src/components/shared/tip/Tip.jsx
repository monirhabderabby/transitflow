const Tip = ({ name, color, bg }) => {
    return (
        <section className="flex">
            <div className="min-h-[23px] bg-primary1 w-[5px]"></div>
            <div
                className={`${
                    bg ? bg : "bg-[#041C37]/50"
                } py-[3px] px-[9px] relative min-h-[23px] ${color}`}
            >
                {name}
            </div>
        </section>
    );
};

export default Tip;
