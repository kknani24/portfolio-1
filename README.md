# Vehicle Detection and Anomaly Detection Flow Chart

```mermaid
graph TD
    A[Start] --> B[Install Dependencies]
    B --> C[Load and Preprocess Data]
    C --> D[Register Dataset]
    D --> E[Train Detectron2 Model]
    E --> F[Use Model for Inference]
    F --> G[Load and Prepare CICIDS2017 Dataset]
    G --> H[Feature Selection and Engineering]
    H --> I[Train Random Forest Classifier]
    I --> J[Apply PCA]
    J --> K[Apply SMOTE for Class Balancing]
    K --> L[Train Isolation Forest]
    L --> M[Train Autoencoder]
    M --> N[Train LSTM Model]
    N --> O[Detect Anomalies]
    O --> P[Visualize Results]
    P --> Q[End]

    subgraph "Vehicle Detection"
    B
    C
    D
    E
    F
    end

    subgraph "Anomaly Detection"
    G
    H
    I
    J
    K
    L
    M
    N
    O
    P
    end
