---

### 2. New File: `CONTRIBUTING.md`
Creating a separate file for instructions is standard practice for GitHub. It keeps the README clean while providing deep-dive instructions for researchers.

**Create a new file in VS Code named `CONTRIBUTING.md` and paste this:**

```markdown
# Contributing to the DS Mouse Models Database

Thank you for helping improve this resource! To maintain data integrity, please follow these steps to submit a new model or update.

## The Workflow

1. **Fork the Repository**: Click the 'Fork' button at the top right of this page to create your own copy.
2. **Clone Locally**: Open VS Code and clone your fork:
   `git clone https://github.com/YOUR_USERNAME/repo-name.git`
3. **Create a Branch**: 
   `git checkout -b add-model-name`
4. **Edit the Data**: 
   - Open `models.html`.
   - Find the appropriate category (e.g., ``).
   - Paste your new row using the template provided in the README.
5. **Verify Genomic Coordinates**: 
   - Ensure positions are in **GRCm39**.
   - Ensure the "Genes" count reflects the orthologous genes at dosage imbalance.
6. **Commit and Push**:
   `git add .`
   `git commit -m "Add [Model Name] by [Author]"`
   `git push origin add-model-name`
7. **Submit a Pull Request**: Go to the original repository on GitHub. You will see a prompt to "Compare & pull request." 

## Data Quality Standards
To be approved, submissions must include:
- A valid **MGI Approved Name**.
- A link to the **First Publication** (PubMed).
- Accurate **Chromosomal Positions**.
- Current **Availability** (JAX, Infrafrontier, or specific Lab contact).

## Approval Process
Our maintainers will review the PR for formatting and coordinate accuracy. We may leave comments if adjustments are needed before the data is merged into the live site.