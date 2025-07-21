#!/bin/bash

echo -e "\e[42mNode.js & Docusaurus container is active.\e[0m"

echo -n "(b)uild or (s)tart website? "
read input

if [[ $input == "b" ]]; then
    npm run build
elif [[ $input == "s" ]]; then
    npm run start
else
    echo "Invalid option selected. Doing nothing."
fi

module top_module (input clk, input reset, output [3:0] q); always @(posedge clk) begin q <= reset ? 4'b0000 : q + 1; end endmodule