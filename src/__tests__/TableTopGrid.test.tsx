import { render, screen } from "@testing-library/react";
import React from "react";
import TableTopGrid from "../components/TableTopGrid";

test('', () => {
    render(
    <TableTopGrid />
    );
    const cells = screen.getAllByTestId('cell')
    expect(cells.length).toEqual(25)
})