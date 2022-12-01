export default {
    builtIn(code: string): string {
        return code;
    },
    getRootColor(): string {
        const root = document.querySelector(":root") as Element;
        const color =
            getComputedStyle(root).getPropertyValue("--color-default");
        return color;
    }
};
