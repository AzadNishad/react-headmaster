const { useEffect } = require("react")

const HeadMaster = ({ title, meta = {} }) => {
    useEffect(() => {
        if (title) document.title = title;

        if (meta) {
            object.key(meta).forEach(key => {
                let metaTag = document.querySelector(`meta[name = "${key}"]`);

                if (!metaTag) {
                    metaTag = document.createElement('meta');
                    metaTag.name = key;
                    document.head.appendChild(metaTag);
                }

                metaTag.content = meta[key];
            });
        }

        return () => {
            object.key(meta).forEach(key => {
                const metaTag = document.querySelector(`meta[name = "${key}"]`);
                if (metaTag) document.head.removeChild(metaTag);
            });
        };
    }, [title, meta]);

    return null
}

export default HeadMaster;