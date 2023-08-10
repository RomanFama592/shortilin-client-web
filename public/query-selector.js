const $ = (selected, search = window.document) => search.querySelector(selected);
const $$ = (selected, search = window.document) => search.querySelectorAll(selected);

export const q = { $: $, $$: $$ };