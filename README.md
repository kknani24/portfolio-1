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

    %% Subgraph for Vehicle Detection
    subgraph "Vehicle Detection"
        direction TB
        B[Install Dependencies]
        C[Load and Preprocess Data]
        D[Register Dataset]
        E[Train Detectron2 Model]
        F[Use Model for Inference]
    end

    %% Subgraph for Anomaly Detection
    subgraph "Anomaly Detection"
        direction TB
        G[Load and Prepare CICIDS2017 Dataset]
        H[Feature Selection and Engineering]
        I[Train Random Forest Classifier]
        J[Apply PCA]
        K[Apply SMOTE for Class Balancing]
        L[Train Isolation Forest]
        M[Train Autoencoder]
        N[Train LSTM Model]
        O[Detect Anomalies]
        P[Visualize Results]
    end

    %% Styling for better visualization
    classDef vehicleDetection fill:#f9f,stroke:#333,stroke-width:2px;
    classDef anomalyDetection fill:#bbf,stroke:#333,stroke-width:2px;

    class vehicleDetection vehicleDetection;
    class anomalyDetection anomalyDetection;
