# 🧬 Down Syndrome Mouse Models Database
> A community-driven interactive reference for DS research models.

[![Contributions Welcome](https://img.shields.io/badge/Contributions-Welcome-brightgreen.svg)](./CONTRIBUTING.md)
[![RRID Registered](https://img.shields.io/badge/RRID-Included-blue.svg)](https://www.rrids.org/)

## 🌐 Live Table
[**View the Interactive Database Here**](https://abbash83.github.io/DS_Rodent_Models_Database/)

## 📋 Project Summary
This repository tracks 40+ specialized mouse models, providing critical data on:
- **Genomic Coordinates**: Mapped to GRCm39.
- **Gene Dosage**: Precise counts of orthologous genes.
- **Traceability**: Official **RRIDs** for standardized publication citation.

## 🤝 How to Contribute (Submit a New Model)
We encourage researchers to update this database via Pull Requests:

1. **Fork** the repository.
2. **Update `models.html`**: Add a new row to the `<tbody>`.
3. **Include RRID**: Search for the model on [RRIDs.org](https://www.rrids.org/) and include the resolver link.
4. **Submit PR**: Our team will verify coordinates and merge the update.

### Row Template:
```html
<tr>
    <td>MGI Link</td>
    <td>Common Name</td>
    <td>Type</td>
    <td>Description</td>
    <td>Background Strain</td>
    <td>GRCm39 Coords</td>
    <td>Gene Count</td>
    <td>Publication Link</td>
    <td>RRID Link</td>
    <td>Stock Link</td>
</tr>
