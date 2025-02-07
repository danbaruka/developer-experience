---
sidebar_label: "Inputs and Outputs"
sidebar_position: 1
---

# Inputs and Outputs

The fundamental concepts to understand the EUTxO (Extended Unspent Transaction Output) model of Cardano is inputs and outputs. Understanding it is key to developing on Cardano.

Let’s use a vending machine analogy to explain inputs and outputs in Cardano transactions.

## 1. **How Vending Machine works**

### a. Outputs as Items in the Vending Machine

- Think of outputs as items (e.g., snacks or drinks) in a vending machine. Each item has:

  - A value (e.g., $1 for a soda).

  - A label (e.g., "A1" for the soda’s location).

  - A condition (e.g., you need to insert $1 to get the soda).

### b. Inputs as Money Inserted

- Inputs are like the money you insert into the vending machine.

### c. Transaction as the Purchase Process

- A transaction is like the process of buying something from the vending machine:

  - You insert money (inputs).

  - You select the item you want (outputs).

  - The vending machine gives you the item and any change (new outputs).

## 2. How It Works in Cardano

Let’s map the vending machine analogy to Cardano transactions:

### a. Outputs (Items in the Vending Machine)

- Each output in Cardano is like an item in the vending machine:

  - Value: The amount of ADA or assets it holds.

  - Address: The condition for spending it (like the label on the vending machine).

  - Data Payload: Optional metadata (like the ingredients list on the snack).

### b. Inputs (Money Inserted)

- Inputs are references to existing outputs (items) that you want to spend. For example:

  - You reference a specific output (e.g., "I want to spend this 10 ADA output").

  - This is like picking a $10 bill from your wallet and inserting a $10 bill into the vending machine.

### c. Transaction (Purchase Process)

- A transaction is the process of:

  - Selecting which outputs (from your available bills) to spend (picking a $10 bill).

  - Creating new outputs (pick items or change).

  - Ensuring the total value of inputs equals the total value of outputs (plus fees).
