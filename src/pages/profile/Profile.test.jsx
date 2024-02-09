import { render, screen } from "@testing-library/react";
import { beforeEach, describe, expect, test } from "vitest";
import Profile from "./Profile";

describe('<Profile>', () => {
    beforeEach(() => {
        render(<Profile></Profile>)
    })

    test('it should render', () => {
        const profileText = screen.getByText('U:')
        expect(profileText).toBeInTheDocument()
    })
})