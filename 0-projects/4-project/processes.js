// ITIL_v3 processes with actvities

const itil_v3 = {
  lifecycle_phase: {
    strategy: {
      process_1: {
        strategy: {
          activity_group: {
            strategic_assesment: {
              activity_1a: "analyse internal factors",
              activity_1b: "analyse external factors",
              activity_2a: "define market spaces",
              activity_2b: "identify strategic industry factors",
              activity_3: "establish objectives",
            },
            strategy_generation: {
              activity_1a: "determine perspective",
              activity_1b: "form a position",
              activity_1c: "craft a plan",
              activity_1d: "adopt patterns of action",
              activity_2: "document service strategy",
            },
            strategy_execution: {
              activity_1a: "service management",
              activity_1b: "align assets with customer outcomes",
              activity_1c: "optimize critical success factors",
              activity_1d: "prioritize investments",
            },
            continual_service_improvement: {},
            expansion_and_growth: {},
          },
        },
      },
      process_2: {
        portfolio_management: {
          portfolio_phase_1: {
            define: {
              activity_1: "services",
              activity_2: "business cases",
            },
          },
          portfolio_phase_2: {
            analyse: {
              activity_1: "value proposition",
              activity_2: "prioritization",
            },
          },
          portfolio_phase_3: {
            approve: {
              activity_1: "change proposal",
              activity_2: "authorization",
            },
          },
          portfolio_phase_4: {
            charter: {
              activity_1: "communication",
              activity_2: "resource allocation",
            },
          },
        },
      },
      process_3: {
        financial_management: {
          main_inputs: {
            input_1: "regulatory requirements",
            input_2: "enterprise financial management policies",
            input_3: "service management processes",
            input_4:
              "service, contract, customer, application, and project portfolios",
            input_5: "service knowledge management system",
          },
          activity_group: {
            accounting: {
              activity_1: "cost model",
              activity_2a: "cost types and elements",
              activity_2b: "cost classification",
              activity_3: "cost centers and cost units",
              activity_4: "chart of accounts",
              activity_5: "analysis and reporting",
              activity_6: "action plans",
            },
            budgeting: {
              activity_1a: "analysis of previous budget",
              activity_1b: "specification of changes to funding and spending",
              activity_1c: "assesment of plans",
              activity_2: "cost and income estimations",
              activity_3: "budgets",
            },
            charging: {
              activity_1: "charging policies",
              activity_2: "decide chargeable items",
              activity_3: "pricing",
              activity_4: "billing",
            },
          },
          main_outputs: {
            output_1: "service valuation",
            output_2: "investment analysis",
            output_3: "compliance",
            output_4: "business impact analysis",
            output_5: "cost optimization",
          },
        },
      },
      process_4: {
        demand_management: {},
      },
      process_5: {
        business_relationship_management: {},
      },
    },
    design: {
      process_1: {
        design_coordination: {},
      },
      process_2: {
        service_catalogue_management: {},
      },
      process_3: {
        service_level_management: {},
      },
      process_4: {
        availability_management: {},
      },
      process_5: {
        capacity_management: {},
      },
      process_6: {
        it_service_continuity_management: {},
      },
      process_7: {
        information_security_management: {},
      },
      process_8: {
        supplier_management: {},
      },
    },
    transition: {
      process_1: {
        transition_planning_and_support: {},
      },
      process_2: {
        change_management: {},
      },
      process_3: {
        service_asset_and_configuration_management: {},
      },
      process_4: {
        release_and_deployment_management: {},
      },
      process_5: {
        service_validation_and_testing: {},
      },
      process_6: {
        change_evaluation: {},
      },
      process_7: {
        knowledge_management: {},
      },
    },
    operation: {
      process_1: {
        event_management: {},
      },
      process_2: {
        incident_management: {},
      },
      process_3: {
        request_fulfilment: {},
      },
      process_4: {
        problem_management: {},
      },
      process_5: {
        access_management: {},
      },
    },
    continual_service_improvement: {
      process_1: {
        plan: {
          activity_1: "identify the strategy for improvement",
          activity_2: "define what you will measure",
        },
      },
      process_2: {
        do: {
          activity_1: "gather the data",
          activity_2: "process the data",
        },
      },
      process_3: {
        check: {
          activity_1: "analyse the information and data",
          activity_2: "present and use the information",
        },
      },
      process_4: {
        act: {
          activity_1: "implement improvement",
        },
      },
    },
  },
};

const { itil_v3.lifecycle_phase } = itil_v3;

console.log(strategic_assesment);
