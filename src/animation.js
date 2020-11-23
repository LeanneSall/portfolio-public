export const pageAnimation = {
    hidden: {
        opacity: 0,


    },
    show: {
        opacity: 1,
        x: 0,
        y: 0,
        transition: {
            duration: 1,
            when: "beforeChildren",
            staggerChildren: 0.50,
        },
    },
    exit: {
        opacity: 0,
        transition: {
            duration: 0.5,
        },
    },
};

export const titleAnim = {
    hidden: { y: 200 },
    show: {
        y: 0,
        transition: { duration: 0.75, ease: "easeOut" },
    },
};

export const fade = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: { ease: "easeOut", duration: 0.75 },
    },
};


export const imgAnim = {
    hidden: {
        scale: 1.5, opacity: 0
    },

    show: {
        scale: 1, opacity: 1,
        transition: { duration: 0.75, ease: "easeOut" },

    },
}


export const projectLine = {

    hidden: { width: '0%' },

    show: {
        width: '100%',
        transition: { duration: 0.95 }
    }




}


export const pageTrans = {
    hidden: { x: '-360%', skew: '-45deg' },
    show: {
        x: '100%',
        skew: '0deg',
        transition: {
            ease: 'easeOut', duration: 1
        }
    }


}


