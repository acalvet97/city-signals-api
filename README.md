# city-signals-api

City Signals is an **API-first side project** focused on designing **urban signals as a product**, not as raw data.

It provides normalized and interpretable signals that describe the contextual state of a city area, enabling digital products to make better decisions without having to process complex urban data pipelines.

This project is intentionally scoped to demonstrate **product thinking through API design**, rather than data infrastructure, real-time accuracy, or predictive systems.

---

## Why City Signals?

Many digital products operating in urban environments need answers to questions like:

- What is happening in this area right now?
- Is this a good place or moment to activate a feature?
- Which areas should be prioritized over others?
- How reliable is this information?

Solving these questions from scratch usually requires:
- multiple heterogeneous data sources
- normalization and aggregation layers
- interpretation logic
- arbitrary scoring and threshold decisions

**City Signals abstracts this complexity** and exposes **signals designed for decision-making**, not raw metrics.

---

## What is a Signal?

In City Signals, a **Signal** is:

> A normalized, interpretable, and actionable representation of the state of an urban area, designed to support product decisions without exposing raw data or internal complexity.

Each signal:
- answers a clear product-level question
- is normalized (score + status + confidence)
- is easy to interpret by product and engineering teams
- is stable as a contract, even if internal logic evolves

If something does not meet these criteria, it is intentionally **not** considered a signal.

---

## Signal Dimensions vs Signal Domains

Conceptually, City Signals is built around **transversal signal dimensions**, such as:

- **Activity** — How active is this area?
- **Density** — How concentrated is the activity?
- **Temporal intensity** — Is the activity sustained or punctual?
- **Stability** — How volatile is the current state?
- **Confidence** — How reliable is the signal?

These dimensions are **not exposed directly**.

Instead, the API exposes **signals by domain** (e.g. parking, traffic), each one internally mapped to these dimensions.  
This separation allows the API contract to remain stable while internal interpretation logic evolves.

---

## API Overview

City Signals exposes a small, opinionated API surface:

- **`GET /health`**  
  Health check endpoint.

- **`GET /v1/signals`**  
  Returns a list of normalized signals for a city, designed for ranking, filtering, and decision-making.

- **`GET /v1/signals/{signalId}`**  
  Returns a detailed, product-level view of a single signal, including interpretation metadata and recent history.

The API is designed **API-first** and fully described using **OpenAPI 3.1**.  
Error responses follow **RFC 7807 (Problem+JSON)**.

---

## What City Signals Does (and Does Not Do)

### It does:
- aggregate and interpret urban information
- expose normalized, comparable signals
- prioritize clarity and contract stability
- treat the API itself as a product

### It does not:
- provide raw or real-time data
- offer predictions or recommendations
- make decisions on behalf of consumers
- optimize for a specific vertical
- aim for absolute accuracy

---

## Intended Audience

City Signals is designed for:
- product teams
- engineering teams
- startups and digital products operating in urban contexts

That need:

> Urban context without becoming experts in urban data.

---

## About the Data

City Signals uses **synthetic and simulated data by design**.

The purpose of this project is not to provide accurate or real-time urban data, but to demonstrate how an API can be designed as a product:
- with clear use cases
- well-defined signals
- stable, consumer-oriented contracts
- explicit scope and trade-offs

This keeps the project intentionally focused on **product thinking** rather than data sourcing or infrastructure complexity.

---

## Project Goal

The goal of City Signals is not feature completeness.

It is to demonstrate:
- API design as a product discipline
- clear MVP definition
- intentional trade-offs
- consumer-oriented contracts

---

## Status

City Signals is an **educational and demonstrative project**.

It is not production-ready and is not intended for real-world deployment.
