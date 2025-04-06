interface CTAButtonProps {
    type: string;
    label: string;
    icon: null | React.ReactElement;
}

const CTAButton = (props: CTAButtonProps) => {
    if (props.type === 'login' && props.icon) {
        return (
            <button className='border-2 border-emerald-500 text-zinc-300 flex gap-1 text-lg px-4 py-2 rounded-lg my-auto hover:bg-emerald-500 hover:text-zinc-900 transition-all'>
                <p>{props.label}</p>
                <span className='my-auto'>{props.icon}</span>
            </button>
        )
    }
    return (
        <button>
            <span>{props.icon}</span>
            <p>{props.label}</p>
        </button>
    );
}

export default CTAButton;