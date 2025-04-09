type CTASecondaryProps = {
    label: string;
}

const CTASecondary = (props: CTASecondaryProps) => {
    return (
        <button className='text-zinc-300 border-2 border-indigo-500 px-4 py-2 font-bold rounded-lg hover:bg-indigo-500 transition-all'>{props.label}</button>
    );
}

export default CTASecondary;