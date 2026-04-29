# Architecture

The project centers on a printable HTML format and local source workflow, with a packaged Windows artifact for easier operation.

## Component View

```mermaid
flowchart LR
  Actor["Operator"] --> Entry["Desktop or HTML interface"]
  Entry --> Service["Bill formatting logic"]
  Service --> Data["Local bill fields"]
  Service --> External["Printer and Windows runtime"]
```

## Key Components

- Printable HTML template
- Source code folder
- Dependency requirements
- Packaged Windows output

## Main Workflow

```mermaid
sequenceDiagram
  participant User
  participant Client
  participant App
  participant Store
  User->>Client: Prepares bill details
  Client->>App: Generates print format
  App->>Store: Validate and persist state
  Store-->>App: Local bill layout prepared
  App-->>Client: Prints or previews bill
  Client-->>User: Present updated result
```

## Design Considerations

- Prioritize predictable layout
- Keep business-specific fields configurable
- Treat packaged output as a release artifact


