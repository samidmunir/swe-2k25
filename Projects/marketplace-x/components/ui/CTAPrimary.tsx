type CTAPrimaryProps = {
    label: string;
};

const CTAPrimary = (props: CTAPrimaryProps) => {
    return (
        <button className='text-zinc-300 border-2 border-sky-500 px-4 py-2 font-bold rounded-lg hover:bg-sky-500 transition-all'>{props.label}</button>
    );
}

export default CTAPrimary;