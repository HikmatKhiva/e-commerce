export default (() => {
const __VLS_setup = async () => {
const __VLS_publicComponent = (await import('vue')).defineComponent({
setup() {
return {};
},
});

const __VLS_componentsOption = {};

let __VLS_name!: 'Header';
function __VLS_template() {
let __VLS_ctx!: InstanceType<import('./__VLS_types.js').PickNotAny<typeof __VLS_publicComponent, new () => {}>> & InstanceType<import('./__VLS_types.js').PickNotAny<typeof __VLS_internalComponent, new () => {}>> & {};
/* Components */
let __VLS_localComponents!: NonNullable<typeof __VLS_internalComponent extends { components: infer C; } ? C : {}> & typeof __VLS_componentsOption & typeof __VLS_ctx;
let __VLS_otherComponents!: typeof __VLS_localComponents & import('./__VLS_types.js').GlobalComponents;
let __VLS_own!: import('./__VLS_types.js').SelfComponent<typeof __VLS_name, typeof __VLS_internalComponent & typeof __VLS_publicComponent & (new () => { $slots: typeof __VLS_slots; }) >;
let __VLS_components!: typeof __VLS_otherComponents & Omit<typeof __VLS_own, keyof typeof __VLS_otherComponents>;
/* Style Scoped */
type __VLS_StyleScopedClasses = {};
let __VLS_styleScopedClasses!: __VLS_StyleScopedClasses | keyof __VLS_StyleScopedClasses | (keyof __VLS_StyleScopedClasses)[];
/* CSS variable injection */
/* CSS variable injection end */
let __VLS_templateComponents!: {} &
import('./__VLS_types.js').WithComponent<'FontAwesomeIcon', typeof __VLS_components, 'FontAwesomeIcon', 'fontAwesomeIcon', 'font-awesome-icon'>;
__VLS_components.FontAwesomeIcon; __VLS_components.FontAwesomeIcon; __VLS_components.FontAwesomeIcon; __VLS_components.fontAwesomeIcon; __VLS_components.fontAwesomeIcon; __VLS_components.fontAwesomeIcon; __VLS_components['font-awesome-icon']; __VLS_components['font-awesome-icon']; __VLS_components['font-awesome-icon'];
// @ts-ignore
[FontAwesomeIcon, FontAwesomeIcon, FontAwesomeIcon,];
{
({} as JSX.IntrinsicElements).nav;
({} as JSX.IntrinsicElements).nav;
(__VLS_x as JSX.IntrinsicElements)['nav'] = { class: (""), };
{
({} as JSX.IntrinsicElements).div;
({} as JSX.IntrinsicElements).div;
(__VLS_x as JSX.IntrinsicElements)['div'] = { class: (" container mx-auto"), };
{
({} as JSX.IntrinsicElements).div;
({} as JSX.IntrinsicElements).div;
(__VLS_x as JSX.IntrinsicElements)['div'] = { class: ("flex  items-center "), };
{
({} as JSX.IntrinsicElements).div;
({} as JSX.IntrinsicElements).div;
(__VLS_x as JSX.IntrinsicElements)['div'] = { class: ("flex j-between w-[70%]  items-center "), };
{
({} as JSX.IntrinsicElements).div;
({} as JSX.IntrinsicElements).div;
(__VLS_x as JSX.IntrinsicElements)['div'] = { class: ("items-center"), };
{
({} as JSX.IntrinsicElements).a;
({} as JSX.IntrinsicElements).a;
(__VLS_x as JSX.IntrinsicElements)['a'] = { href: ("#"), class: (" text-lg font-semibold"), };
}
}
{
({} as JSX.IntrinsicElements).div;
({} as JSX.IntrinsicElements).div;
(__VLS_x as JSX.IntrinsicElements)['div'] = { class: (" md:block"), };
{
({} as JSX.IntrinsicElements).div;
({} as JSX.IntrinsicElements).div;
(__VLS_x as JSX.IntrinsicElements)['div'] = { class: ("ml-10 flex items-baseline space-x-4"), };
{
({} as JSX.IntrinsicElements).a;
({} as JSX.IntrinsicElements).a;
(__VLS_x as JSX.IntrinsicElements)['a'] = { href: ("#"), class: ("text-black px-3 py-2 rounded-md text-sm font-medium"), };
}
{
({} as JSX.IntrinsicElements).a;
({} as JSX.IntrinsicElements).a;
(__VLS_x as JSX.IntrinsicElements)['a'] = { href: ("#"), class: ("text-black px-3 py-2 rounded-md text-sm font-medium"), };
}
{
({} as JSX.IntrinsicElements).a;
({} as JSX.IntrinsicElements).a;
(__VLS_x as JSX.IntrinsicElements)['a'] = { href: ("#"), class: ("text-black px-3 py-2 rounded-md text-sm font-medium"), };
}
{
({} as JSX.IntrinsicElements).a;
({} as JSX.IntrinsicElements).a;
(__VLS_x as JSX.IntrinsicElements)['a'] = { href: ("#"), class: ("text-black px-3 py-2 rounded-md text-sm font-medium"), };
}
}
}
}
{
({} as JSX.IntrinsicElements).div;
({} as JSX.IntrinsicElements).div;
(__VLS_x as JSX.IntrinsicElements)['div'] = { class: ("hidden md:block"), };
{
(__VLS_x as import('./__VLS_types.js').ComponentProps<typeof __VLS_templateComponents.FontAwesomeIcon>) = { icon: ((['fas', 'magnifying-glass'])), };
}
{
({} as JSX.IntrinsicElements).input;
(__VLS_x as JSX.IntrinsicElements)['input'] = { type: ("text"), class: ("border px-3 rounded  text-sm  placeholder:text-slate-400"), placeholder: ("What are you looking for"), };
}
{
({} as JSX.IntrinsicElements).div;
({} as JSX.IntrinsicElements).div;
(__VLS_x as JSX.IntrinsicElements)['div'] = { class: ("mr-2 flex md:hidden"), };
{
(__VLS_x as import('./__VLS_types.js').ComponentProps<typeof __VLS_templateComponents.FontAwesomeIcon>) = { icon: ((['far', 'heart'])), };
}
{
(__VLS_x as import('./__VLS_types.js').ComponentProps<typeof __VLS_templateComponents.FontAwesomeIcon>) = { icon: ((['fas', 'cart-shopping'])), };
}
}
}
}
}
}
if (typeof __VLS_styleScopedClasses === 'object' && !Array.isArray(__VLS_styleScopedClasses)) {
}
declare var __VLS_slots: {};
return __VLS_slots;
}
const __VLS_internalComponent = (await import('vue')).defineComponent({
setup() {
return {};
},
});
return {} as typeof __VLS_publicComponent;
};
return {} as typeof __VLS_setup extends () => Promise<infer T> ? T : never;
})({} as any);
