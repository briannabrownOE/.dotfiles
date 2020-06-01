/**
 * Conventions:
 * _message: is for unformatted text that will be shown as-is to
 * the user.
 * _text: is for text that will appear in the UI, possibly with
 * decorations, e.g., $(x) uses the https://octicons.github.com/ and should not
 * be localized
 *
 * If ommitted, we will assume _message.
 */
export declare const messages: {
    channel_name: string;
    channel_starting_message: string;
    channel_end_with_exit_code: string;
    channel_end_with_sfdx_not_found: string;
    channel_end_with_error: string;
    channel_end: string;
    progress_notification_text: string;
    notification_successful_execution_text: string;
    notification_canceled_execution_text: string;
    notification_unsuccessful_execution_text: string;
    notification_show_button_text: string;
    notification_show_in_status_bar_button_text: string;
    notification_make_default_dev: string;
    predicates_no_folder_opened_text: string;
    predicates_no_sfdx_project_found_text: string;
    task_view_running_message: string;
    status_bar_text: string;
    status_bar_tooltip: string;
    force_auth_web_login_authorize_dev_hub_text: string;
    force_auth_web_login_authorize_org_text: string;
    parameter_directory_strict_not_available: string;
    parameter_gatherer_enter_file_name: string;
    parameter_gatherer_enter_dir_name: string;
    parameter_gatherer_enter_username_name: string;
    parameter_gatherer_enter_alias_name: string;
    parameter_gatherer_enter_custom_url: string;
    parameter_gatherer_enter_scratch_org_expiration_days: string;
    parameter_gatherer_enter_project_name: string;
    parameter_gatherer_paste_forceide_url: string;
    parameter_gatherer_paste_forceide_url_placeholder: string;
    parameter_gatherer_invalid_forceide_url: string;
    force_org_create_default_scratch_org_text: string;
    force_org_create_result_parsing_error: string;
    force_org_open_default_scratch_org_text: string;
    force_org_open_default_scratch_org_container_error: string;
    force_org_open_container_mode_message_text: string;
    force_source_pull_default_scratch_org_text: string;
    force_source_pull_force_default_scratch_org_text: string;
    force_source_push_default_scratch_org_text: string;
    force_source_push_force_default_scratch_org_text: string;
    force_source_deploy_text: string;
    force_source_deploy_select_file_or_directory: string;
    force_source_deploy_select_manifest: string;
    force_source_retrieve_text: string;
    force_source_retrieve_display_text: string;
    force_source_retrieve_select_file_or_directory: string;
    force_source_retrieve_select_manifest: string;
    force_source_delete_text: string;
    force_source_delete_manifest_unsupported_message: string;
    force_source_delete_select_file_or_directory: string;
    force_source_delete_confirmation_message: string;
    confirm_delete_source_button_text: string;
    cancel_delete_source_button_text: string;
    force_source_status_text: string;
    force_apex_test_run_text: string;
    force_apex_test_run_all_test_label: string;
    force_apex_test_run_all_tests_description_text: string;
    force_apex_class_create_text: string;
    force_visualforce_component_create_text: string;
    force_visualforce_page_create_text: string;
    force_lightning_app_create_text: string;
    force_lightning_component_create_text: string;
    force_lightning_event_create_text: string;
    force_lightning_interface_create_text: string;
    force_source_status_local_text: string;
    force_source_status_remote_text: string;
    warning_prompt_file_overwrite: string;
    warning_prompt_dir_overwrite: string;
    warning_prompt_continue_confirm: string;
    warning_prompt_overwrite_cancel: string;
    warning_prompt_overwrite_message: string;
    warning_prompt_overwrite: string;
    warning_prompt_overwrite_all: string;
    warning_prompt_skip: string;
    warning_prompt_skip_all: string;
    warning_prompt_other_existing: string;
    warning_prompt_other_not_shown: string;
    force_config_list_text: string;
    force_alias_list_text: string;
    force_org_display_default_text: string;
    force_org_display_username_text: string;
    force_debugger_query_session_text: string;
    force_debugger_stop_text: string;
    force_debugger_stop_none_found_text: string;
    force_data_soql_query_input_text: string;
    force_data_soql_query_selection_text: string;
    parameter_gatherer_enter_soql_query: string;
    force_apex_execute_document_text: string;
    force_apex_execute_selection_text: string;
    force_project_create_text: string;
    force_project_create_open_dialog_create_label: string;
    force_project_create_standard_template: string;
    force_project_create_standard_template_display_text: string;
    force_project_create_empty_template_display_text: string;
    force_project_create_analytics_template_display_text: string;
    force_project_create_empty_template: string;
    force_project_create_analytics_template: string;
    force_apex_trigger_create_text: string;
    force_start_apex_debug_logging: string;
    force_apex_debug_log_status_bar_text: string;
    force_apex_debug_log_status_bar_hover_text: string;
    force_stop_apex_debug_logging: string;
    isv_debug_bootstrap_step1_create_project: string;
    isv_debug_bootstrap_step2_configure_project: string;
    isv_debug_bootstrap_step2_configure_project_retrieve_namespace: string;
    isv_debug_bootstrap_step3_retrieve_org_source: string;
    isv_debug_bootstrap_step4_convert_org_source: string;
    isv_debug_bootstrap_step5_list_installed_packages: string;
    isv_debug_bootstrap_step6_retrieve_packages_source: string;
    isv_debug_bootstrap_step7_convert_package_source: string;
    isv_debug_bootstrap_processing_package: string;
    isv_debug_bootstrap_generate_launchjson: string;
    isv_debug_bootstrap_open_project: string;
    force_apex_log_get_text: string;
    force_apex_log_get_no_logs_text: string;
    force_apex_log_get_pick_log_text: string;
    force_apex_log_list_text: string;
    error_creating_packagexml: string;
    error_extracting_org_source: string;
    error_extracting_packages: string;
    error_updating_sfdx_project: string;
    error_writing_installed_package_info: string;
    error_cleanup_temp_files: string;
    demo_mode_status_text: string;
    demo_mode_status_tooltip: string;
    demo_mode_prompt: string;
    force_auth_logout_all_text: string;
    manifest_editor_title_message: string;
    REST_API: string;
    tooling_API: string;
    REST_API_description: string;
    tooling_API_description: string;
    telemetry_legal_dialog_message: string;
    telemetry_legal_dialog_button_text: string;
    invalid_debug_level_id_error: string;
    auth_project_label: string;
    auth_project_detail: string;
    auth_prod_label: string;
    auth_prod_detail: string;
    auth_sandbox_label: string;
    auth_sandbox_detail: string;
    auth_custom_label: string;
    auth_custom_detail: string;
    auth_invalid_url: string;
    error_fetching_auth_info_text: string;
    error_no_package_directories_found_on_setup_text: string;
    error_no_package_directories_paths_found_text: string;
    error_push_or_deploy_on_save_no_default_username: string;
    error_source_path_not_in_package_directory_text: string;
    org_select_text: string;
    missing_default_org: string;
    force_config_set_org_text: string;
    error_parsing_sfdx_project_file: string;
    sfdx_cli_not_found: string;
    table_header_errors: string;
    table_header_project_path: string;
    table_header_type: string;
    table_header_full_name: string;
    table_header_state: string;
    table_no_results_found: string;
    table_title_deployed_source: string;
    table_title_deploy_errors: string;
    table_title_pushed_source: string;
    table_title_push_errors: string;
    push_conflicts_error: string;
    error_no_default_username: string;
    error_no_default_devhubusername: string;
    custom_output_directory: string;
    warning_using_global_username: string;
    apex_class_message_name: string;
    apex_trigger_message_name: string;
    visualforce_component_message_name: string;
    visualforce_page_message_name: string;
    aura_bundle_message_name: string;
    lwc_message_name: string;
    force_lightning_lwc_create_text: string;
    empty_components: string;
    error_auth_token: string;
    error_no_org_found: string;
    error_invalid_org_alias: string;
    error_invalid_expiration_days: string;
    error_fetching_metadata: string;
    error_org_browser_text: string;
    error_org_browser_init: string;
    error_overwrite_prompt: string;
    force_list_metadata: string;
    AccessControlPolicy: string;
    ActionLinkGroupTemplate: string;
    AIAssistantTemplate: string;
    AnalyticSnapshot: string;
    AnimationRule: string;
    ApexClass: string;
    ApexComponent: string;
    ApexPage: string;
    ApexTestSuite: string;
    ApexTrigger: string;
    AppMenu: string;
    ApprovalProcess: string;
    AssignmentRules: string;
    AssistantRecommendationType: string;
    AuraDefinitionBundle: string;
    AuthProvider: string;
    AutoResponseRules: string;
    BrandingSet: string;
    BusinessProcess: string;
    CallCenter: string;
    CampaignInfluenceModel: string;
    CaseSubjectParticle: string;
    Certificate: string;
    ChannelLayout: string;
    ChatterExtension: string;
    CleanDataService: string;
    CommandAction: string;
    Community: string;
    CommunityTemplateDefinition: string;
    CommunityThemeDefinition: string;
    CompactLayout: string;
    ConnectedApp: string;
    ContentAsset: string;
    CorsWhitelistOrigin: string;
    CspTrustedSite: string;
    CustomApplication: string;
    CustomApplicationComponent: string;
    CustomDataType: string;
    CustomExperience: string;
    CustomFeedFilter: string;
    CustomField: string;
    CustomFieldTranslation: string;
    CustomHelpMenuSection: string;
    CustomLabels: string;
    CustomMetadata: string;
    CustomNotificationType: string;
    CustomObject: string;
    CustomObjectTranslation: string;
    CustomPageWebLink: string;
    CustomPermission: string;
    CustomSite: string;
    CustomTab: string;
    Dashboard: string;
    DashboardFolder: string;
    DataCategoryGroup: string;
    DataPipeline: string;
    DelegateGroup: string;
    Document: string;
    DocumentFolder: string;
    DuplicateRule: string;
    EclairGeoData: string;
    EmailFolder: string;
    EmailServicesFunction: string;
    EmailTemplate: string;
    EmbeddedServiceBranding: string;
    EmbeddedServiceConfig: string;
    EmbeddedServiceFieldService: string;
    EmbeddedServiceFlowConfig: string;
    EmbeddedServiceLiveAgent: string;
    EntitlementProcess: string;
    EntitlementTemplate: string;
    EscalationRules: string;
    EventDelivery: string;
    EventSubscription: string;
    EventType: string;
    ExperienceBundle: string;
    ExternalDataSource: string;
    ExternalServiceRegistration: string;
    FeatureParameterBoolean: string;
    FeatureParameterDate: string;
    FeatureParameterInteger: string;
    FieldSet: string;
    FlexiPage: string;
    Flow: string;
    FlowCategory: string;
    FlowDefinition: string;
    Form: string;
    GlobalPicklist: string;
    GlobalValueSet: string;
    GlobalValueSetTranslation: string;
    Group: string;
    HomePageComponent: string;
    HomePageLayout: string;
    Index: string;
    InsightType: string;
    InstalledPackage: string;
    IntegrationHubSettings: string;
    IntegrationHubSettingsType: string;
    KeywordList: string;
    Layout: string;
    LeadConvertSettings: string;
    Letterhead: string;
    LicenseDefinition: string;
    LightningBolt: string;
    LightningComponentBundle: string;
    LightningExperienceTheme: string;
    ListView: string;
    LiveChatAgentConfig: string;
    LiveChatButton: string;
    LiveChatDeployment: string;
    LiveChatSensitiveDataRule: string;
    ManagedTopics: string;
    MarketingResourceType: string;
    MatchingRules: string;
    MilestoneType: string;
    ModerationRule: string;
    NamedCredential: string;
    Network: string;
    NetworkBranding: string;
    OauthCustomScope: string;
    Orchestration: string;
    OrchestrationContext: string;
    PathAssistant: string;
    PermissionSet: string;
    PermissionSetGroup: string;
    PlatformCachePartition: string;
    PlatformEventChannel: string;
    Portal: string;
    PostTemplate: string;
    PresenceDeclineReason: string;
    PresenceUserConfig: string;
    Profile: string;
    ProfilePasswordPolicy: string;
    ProfileSessionSetting: string;
    Prompt: string;
    Queue: string;
    QueueRoutingConfig: string;
    QuickAction: string;
    RecommendationStrategy: string;
    RecordActionDeployment: string;
    RecordType: string;
    RemoteSiteSetting: string;
    Report: string;
    ReportFolder: string;
    ReportType: string;
    Role: string;
    SamlSsoConfig: string;
    Scontrol: string;
    ServiceChannel: string;
    ServicePresenceStatus: string;
    Settings: string;
    SharingCriteriaRule: string;
    SharingOwnerRule: string;
    SharingReason: string;
    SharingRules: string;
    SharingSet: string;
    SharingTerritoryRule: string;
    SiteDotCom: string;
    Skill: string;
    StandardValueSet: string;
    StandardValueSetTranslation: string;
    StaticResource: string;
    SynonymDictionary: string;
    Territory2: string;
    Territory2Model: string;
    Territory2Rule: string;
    Territory2Type: string;
    Territory: string;
    TopicsForObjects: string;
    TransactionSecurityPolicy: string;
    Translations: string;
    UiPlugin: string;
    UserCriteria: string;
    ValidationRule: string;
    VisualizationPlugin: string;
    WaveApplication: string;
    WaveDashboard: string;
    WaveDataflow: string;
    WaveDataset: string;
    WaveLens: string;
    WaveRecipe: string;
    WaveTemplateBundle: string;
    WaveXmd: string;
    WebLink: string;
    Workflow: string;
    XOrgHub: string;
    force_source_diff_text: string;
    force_source_diff_unsupported_type: string;
    force_source_diff_title: string;
    force_source_diff_command_not_found: string;
};
