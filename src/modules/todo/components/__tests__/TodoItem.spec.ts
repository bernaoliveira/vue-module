import { describe, it, expect } from "vitest";

import { mount } from "@vue/test-utils";
import TodoItem from "../TodoItem.vue";

describe("TodoItem", () => {
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
