import { describe, it, expect, beforeEach } from "vitest";
import { createPinia, setActivePinia } from "pinia";

import { mount } from "@vue/test-utils";
import TodoItem from "../TodoItem.vue";

describe("TodoItem", () => {
    beforeEach(() => {
        // create fresh pinia store for component
        setActivePinia(createPinia());
    });

    it("renders properly", () => {
        const wrapper = mount(TodoItem, {
            props: {
                item: {
                    id: 1,
                    name: "Test component",
                    done: false
                }
            }
        });
        expect(wrapper.text()).toContain("Test component");
    });
});
