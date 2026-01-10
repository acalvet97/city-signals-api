# city-signals-api

City Signals is an **API-first side project** focused on designing **urban signals as a product**, not as raw data.

It provides normalized and interpretable signals that describe the contextual state of a city area, enabling digital products to make better decisions without having to process complex urban data pipelines.

This project is intentionally scoped to demonstrate **product thinking through API design**, rather than data infrastructure or real-time accuracy.

## Why City Signals?

Many digital products operating in urban environments need answers to questions like:

- What is happening in this area right now?
- Is this a good place or moment to activate a feature?
- Which areas should be prioritized over others?
- How reliable is this information?

Solving these questions from scratch usually requires:
- multiple data sources
- normalization and aggregation
- interpretation layers
- arbitrary scoring decisions

**City Signals abstracts this complexity** and exposes **signals designed for decision-making**, not raw metrics.

## What is a Signal?

In City Signals, a **Signal** is:

> A normalized, interpretable, and actionable representation of the state of an urban area, designed to support product decisions without exposing raw data or internal complexity.

Each signal:
- answers a clear product question
- is normalized (score + bucket)
- is easy to interpret by product and engineering teams
- is stable as a contract, even if internal logic evolves

If something does not meet these criteria, it is intentionally **not** considered a signal.

## Core Signals (v1)

City Signals v1 focuses on a **small, transversal, and opinionated** set of signals:

### Activity
**Question:**  
How active is this area?

Used to:
- prioritize zones
- trigger features
- time product actions

### Density
**Question:**  
How concentrated is the activity in this area?

Distinguishes between:
- dispersed activity
- concentrated activity

### Temporal Intensity
**Question:**  
Is the activity sustained over time or punctual?

Helps differentiate:
- recurring patterns
- isolated events

### Stability
**Question:**  
How stable or volatile is the current state?

Useful for:
- risk assessment
- conservative vs aggressive decisions

### Confidence
**Question:**  
How reliable are these signals?

Enables:
- UX degradation strategies
- fallback logic
- informed product decisions

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

## Intended Audience

City Signals is designed for:
- product teams
- engineering teams
- startups and digital products operating in urban contexts

That need:
> urban context without becoming experts in urban data.

## About the Data

City Signals uses **synthetic and simulated data by design**.

The purpose of this project is not to provide accurate or real-time urban data, but to demonstrate how an API can be designed as a product:
- with clear use cases
- well-defined signals
- stable and consumer-oriented contracts
- thoughtful scope and trade-offs

This approach keeps the project intentionally focused on **product thinking** rather than data sourcing or infrastructure complexity.

## Project Goal

The goal of City Signals is not feature completeness.

It is to demonstrate:
- API design as a product discipline
- clear MVP definition
- intentional trade-offs
- consumer-oriented contracts

## Status

City Signals is an **educational and demonstrative project**.

It is not production-ready.
