# Behavioral Phenotyping Guidelines for Down Syndrome Mouse Models

This document summarizes the behavioral phenotyping protocols and ARRIVE reporting
guidelines as described in:

> **Roper, R. J., Goodlett, C. R., Martínez de Lagrán, M., & Dierssen, M. (2020).**
> Behavioral phenotyping for Down syndrome in mice.
> *Current Protocols in Mouse Biology*, 10, e79.
> doi: [10.1002/cpmo.79](https://doi.org/10.1002/cpmo.79)

---

## Overview

Down syndrome (DS) is the most common genetic form of intellectual disability, caused
by trisomy of Homo sapiens autosome 21 (Hsa21). Mouse models have been critical for
understanding the neurological basis of DS behavioral phenotypes and for evaluating
pharmacological treatments. This document describes three core behavioral protocols
validated for DS mouse models, along with ARRIVE reporting guidelines adapted
specifically for DS research.

---

## General Considerations for DS Mouse Models

- DS mouse models require specific knowledge beyond standard mouse model parameters.
- Key validity criteria: **construct validity** (genetic representation), **face validity**
  (phenotypic representation), and **predictive validity** (translational potential).
- Behavioral phenotypes are **not constant across the lifespan** — profiling should be
  performed at multiple developmental stages.
- **Sex differences** are significant in DS models and must be accounted for.
- **Genetic background** strongly influences DS-related phenotypes.
- **Genetic drift** may occur in long-maintained colonies — document generations carefully.

### Recommended Order of Testing
1. Neurodevelopmental studies and home cage observations
2. General health and neurologic reflexes
3. Sensory and motor abilities
4. Behavioral domains relevant to specific hypotheses

> ⚠️ All protocols using live animals must be reviewed and approved by an Institutional
> Animal Care and Use Committee (IACUC) and must conform to governmental regulations.

---

## Basic Protocol 1: Preweaning Neurodevelopmental Battery

**Purpose:** Evaluate acquisition of neurological, sensory, and motor developmental
milestones during the postnatal stage (PD1–PD21).

**Key milestones assessed:**
- Body growth (weight and length daily PD1–PD21)
- Developmental landmarks: pinna detachment (PD2), incisor eruption (PD7), eye
  opening (PD9)
- Neurobehavioral reflexes: surface righting (PD3), forepaw grasping (PD3), cliff drop
  aversion (PD3), negative geotaxis (PD3), crossed extensor reflex (PD5), rooting
  response (PD6), forelimb placing (PD7), tactile orientation (PD7), vertical climbing
  (PD7), vibrissae placing (PD8), Preyer reflex/startle (PD10), visual placing (PD10),
  blast response (PD11)
- Neuromotor development: pivoting (PD7, PD10, PD14) and walking
- Psychomotor development: homing test (PD14)

**Key considerations:**
- Use 6–8 litters; for Ts65Dn, only 20–40% of offspring are trisomic at weaning.
- Use Ts65Dn mothers younger than 5 months to achieve 12–14 trisomic pups per litter.
- Perform blind to genotype.
- Test during the dark phase of the light cycle.
- Separate litter from dam no longer than 30 min.
- An experienced researcher can complete the full battery in < 4 min per pup.

**Data analysis:**
- Nonparametric Mann-Whitney and Wilcoxon signed-rank tests for single and repeated
  measures respectively.
- Fisher's exact test for differences between data points.

---

## Basic Protocol 2: Balance Beam

**Purpose:** Assess motor coordination and balance; a behavioral correlate of cerebellar
dysfunction replicated in DS mouse models.

**Setup:**
- Wooden beams: 1 m length, widths of 19, 12, 9, and/or 6 mm
- Goal box: ~20 × 20 × 20 cm black Plexiglas
- Testing room illuminated with red light (~700 nm, 8–10 lux)
- Camera for video recording on Day 3

**Protocol (3 days):**
- **Day 1:** Training on 19-mm beam — train to traverse full length without hesitation
- **Day 2:** Training on 12-mm beam — criterion: 3 consecutive uninterrupted traversals
- **Day 3:** Testing on 12-, 9-, and 6-mm beams (3 trials each); video recorded

**Scoring:**
- Number of hind paw slips (hind paw entirely missing the beam surface)
- Scored by 3 trained independent scorers, blind to genotype
- The 9-mm beam provides the most sensitivity for Ts65Dn impairments

**Key findings (Ts65Dn):**
- Trisomic mice show significantly more paw slips on the 9-mm beam
- Effect sizes: Cohen's *d* = 0.73 (Stringer et al., 2015); *d* = 0.63 (Stringer et al., 2017)

---

## Basic Protocol 3: Multivariate Concentric Square Field (MCSF) Test

**Purpose:** Simultaneously assess multiple behavioral phenotypes — locomotion,
exploration, risk taking, risk assessment, and shelter seeking — in a single session.

**Apparatus:**
- Outer square field (70 × 70 × 26 cm) enclosing an inner center square (41 × 41 × 25 cm)
- Features: center circle (16 cm diameter), north corridor (slope + bridge), south
  corridor (dark corner room, DCR), west corridor (hurdle with photocells)
- Bridge illuminated at ~320 lux; ambient room light 8–10 lux
- Recorded with Ethovision system; scored offline with Observer XT Version 15

**Protocol:**
- Mice in dark phase of light/dark cycle
- 45-min acclimation to testing room
- 20-min free exploration session
- Clean apparatus with 70% ethanol between sessions

**Behavioral categories (rank-order analysis):**

| Category | Key Measures |
|---|---|
| Locomotor activity | Total entries across all zones |
| Exploratory behavior | Hurdle visits, photocell counts, latency to slope/hurdle |
| Risk assessment | Latency to leave center, slope duration, bridge latency |
| Risk taking | Bridge visits, center circle visits |
| Shelter seeking | Dark corner room frequency, duration, latency |

**Scoring:**
- 3 independent trained observers, blind to treatment
- Average scores across observers
- Rank-order statistics for non-locomotor categories; parametric for locomotor activity

---

## ARRIVE Guidelines for DS Mouse Model Research

As described in Roper et al. (2020), adherence to the
[ARRIVE (Animal Research: Reporting of In Vivo Experiments) Guidelines](https://arriveguidelines.org)
(Kilkenny et al., 2010) is essential for DS mouse model research, with the following
DS-specific additions:

### Study Design & Experimental Procedures
- Report exact numbers of animals per group (not ranges)
- Describe how investigators were blinded to genotypes
- Detail steps taken to reduce subjective bias
- Specify order of tests and whether performed in batches
- Note any stressful elements (handling, light intensity, footshock sensitivity)
- Define primary and secondary outcomes
- Provide sufficient statistical detail including normality testing

### Experimental Animals
Report all of the following for DS mouse models:

| Parameter | Why It Matters for DS Models |
|---|---|
| **Source & strain** | Different Ts65Dn and Dp16 strains carry same genes but may differ phenotypically |
| **Genetic modifications & background** | Background genes influence DS phenotypes; crosses must be fully described |
| **Sex** | Significant sex differences exist in DS model physiology and behavior |
| **Developmental stage** | Subtle stage differences influence phenotypes |
| **Age & weight** | DS models differ from controls in age/weight-dependent phenotypes |
| **Generations in colony** | Genetic drift may affect phenotypes over generations |

### Housing & Husbandry
- Origin of trisomy (from male or female parent)
- Number of mice housed together
- Environmental enrichment details
- Light/dark cycle timing relative to experimental testing

### Sample Size
- Most behavioral experiments require **10–20 mice per group**
- If sex differences detected: n = 10–20 per sex per genotype
- Report average litter size and number of litters
- Provide power analysis justification
- Note: DS models have reduced viability and small litters — plan accordingly

### Handling Standardization
- **5 min/day of handling for at least 3 days** before testing is recommended
- Report handling duration and frequency
- Minimize stress: use nest-scented gloves, keep handling brief

---

## Citation

If using these protocols or guidelines, please cite:

> Roper, R. J., Goodlett, C. R., Martínez de Lagrán, M., & Dierssen, M. (2020).
> Behavioral phenotyping for Down syndrome in mice.
> *Current Protocols in Mouse Biology*, 10, e79.
> doi: [10.1002/cpmo.79](https://doi.org/10.1002/cpmo.79)

---

## Related Resources

- [ARRIVE Guidelines (arriveguidelines.org)](https://arriveguidelines.org)
- [Trisomy 21 Research Society Preclinical Committee](https://www.t21rs.org)
- [DS Rodent Models Database](https://github.com/abbash83/DS_Rodent_Models_Database)