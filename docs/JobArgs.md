# ManageragentsApi.JobArgs

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**objectUploaderNotificationAndLoggingEmailBcc** | **String** | BCC email notification recipients | [optional] 
**objectUploaderNotificationAndLoggingEmailCc** | **String** | CC email notification recipients | [optional] 
**objectUploaderNotificationAndLoggingEmailTo** | **String** | Primary email notification recipients | [optional] 
**objectUploaderNotificationAndLoggingEmailCondition** | **String** | Set when job email notifications are sent. | [optional] 
**objectUploaderNotificationAndLoggingSpLogSeverity** | **String** | Set the logging level for the job. | [optional] 
**objectUploaderNotificationAndLoggingEmailJobFailureReportTo** | **String** | Job failure email notification recipients | [optional] 
**objectUploaderOptionsSpEncryption** | **String** | Encryption level as set in the Advanced Options section | [optional] 
**objectUploaderOptionsDeliveryMode** | **String** | Set the transfer delivery mode - `yes` - Certify file delivery and log all file names and allow file search in the Manager interface - `unsigned` - Log names of the files transferred - `no` - Use temporary work files during transfer, allowing an interrupted transfer to resume from where the interruption occurred - `fast` - Do not use temporary work files, transfer the files as fast as possible | [optional] 
**objectUploaderScheduleSpFrequency** | **String** | Set how frequently the job runs For more information, see [Job Scheduling](https://developer.signiant.com/manager-agents/job-scheduling.html#job-frequency). | [optional] 
**objectUploaderScheduleSpInterruptOnFailure** | **String** | Set whether to halt the job immediately and display an alarm on the Manager interface if the job fails | [optional] 
**objectUploaderScheduleSpStartAt** | **String** | The scheduled start date and time for the job | [optional] 
**objectUploaderScheduleFinishBefore** | **String** | The scheduled time the job must finish before | [optional] 
**objectUploaderSchedulePriority** | **String** | The job priority level For more informaton, see [Job Scheduling](https://developer.signiant.com/manager-agents/job-scheduling.html#job-priority) | [optional] 
**objectUploaderScheduleTimezone** | **String** | The Manager time zone | [optional] 
**objectUploaderSourceExcludeFiles** | **String** | Exclude files from a job based on [file patterns](https://help.signiant.com/manager-agents/jobs/object-mover/advanced-configuration#file-patterns) | [optional] 
**objectUploaderSourceExcludeSubDirList** | **String** | List of subfolders to exclude from a job when using `Specified` for the `ExcludeSubdirectories` argument. | [optional] 
**objectUploaderSourceExcludeSubdirectories** | **String** | Set whether to exclude subdirectories from the job | [optional] 
**objectUploaderSourceFileReadinessCheckDelay** | **String** | Time in seconds to wait before completing a file readiness check | [optional] 
**objectUploaderSourceFileReadinessCheckType** | **String** |  | [optional] 
**objectUploaderSourceIncludeFiles** | **String** | The file pattern to include | [optional] 
**objectUploaderSourceSourceAgent** | **String** |  | [optional] 
**objectUploaderSourceSourceData** | **String** | The `siglist` XML path to the source data | [optional] 
**objectUploaderSourceSourceDeletionsAfterSuccessfulTransfer** | **String** |  | [optional] 
**objectUploaderSourceSourceDirectoriestoExcludefromDeletionScan** | **String** | Files to exclude from deletion after transfer | [optional] 
**objectUploaderTargetTargetAgent** | **String** |  | [optional] 
**objectUploaderTargetTargetObjectStorage** | **String** |  | [optional] 
**objectUploaderTransportBandwidthCeiling** | **String** | Maximumum amount of bandwidth usage for this job 0 indicates unlimited | [optional] 
**objectUploaderTransportBandwidthFloor** | **String** | Minimum amount of bandwidth usage for this job 0 indicates unlimited | [optional] 
**objectUploaderTransportBandwidthThrottleByTimeOfDay** | **String** | Time of day and days the week to set a maximum transfer rate.  **Format:** <start-time>;<end-time>;<days-of-the-week>;<bit-rate>  Days of the week are ordered Saturday to Sunday Use Y/N to enable or disable the bandwidth throttle for that day | [optional] 
**objectUploaderTransportUseWANAccelerator** | **String** |  | [optional] 
**objectUploaderTransportSpUdp** | **String** |  | [optional] 
**objectUploaderTransportSimultaneousTransferStreams** | **String** |  | [optional] 
**objectUploaderTransportWANAcceleratorAggressiveness** | **String** | Set the [WAN Accelerator Aggressiveness level](https://help.signiant.com/manager-agents/jobs/object-mover/advanced-configuration/#wan-acceleration) | [optional] 
**notes** | **String** | Additional notes about the job | [optional] 


<a name="ObjectUploaderNotificationAndLoggingEmailConditionEnum"></a>
## Enum: ObjectUploaderNotificationAndLoggingEmailConditionEnum


* `always` (value: `"Always"`)

* `alwaysExcludeEmptyTransfers` (value: `"Always Exclude Empty Transfers"`)

* `onTransfer` (value: `"On transfer"`)

* `never` (value: `"Never"`)




<a name="ObjectUploaderNotificationAndLoggingSpLogSeverityEnum"></a>
## Enum: ObjectUploaderNotificationAndLoggingSpLogSeverityEnum


* `info` (value: `"info"`)

* `debug` (value: `"debug"`)

* `error` (value: `"error"`)

* `trace` (value: `"trace"`)

* `warn` (value: `"warn"`)




<a name="ObjectUploaderOptionsSpEncryptionEnum"></a>
## Enum: ObjectUploaderOptionsSpEncryptionEnum


* `high` (value: `"high"`)

* `none` (value: `"none"`)




<a name="ObjectUploaderOptionsDeliveryModeEnum"></a>
## Enum: ObjectUploaderOptionsDeliveryModeEnum


* `yes` (value: `"yes"`)

* `unsigned` (value: `"unsigned"`)

* `no` (value: `"no"`)

* `fast` (value: `"fast"`)




<a name="ObjectUploaderSourceExcludeSubdirectoriesEnum"></a>
## Enum: ObjectUploaderSourceExcludeSubdirectoriesEnum


* `none` (value: `"None"`)

* `all` (value: `"All"`)

* `specified` (value: `"Specified"`)




<a name="ObjectUploaderSourceFileReadinessCheckTypeEnum"></a>
## Enum: ObjectUploaderSourceFileReadinessCheckTypeEnum


* `none` (value: `"None"`)

* `consecutiveSeek` (value: `"Consecutive Seek"`)

* `mD5Hash` (value: `"MD5 Hash"`)

* `dateTimeSize` (value: `"Date/Time & Size"`)




<a name="ObjectUploaderSourceSourceDeletionsAfterSuccessfulTransferEnum"></a>
## Enum: ObjectUploaderSourceSourceDeletionsAfterSuccessfulTransferEnum


* `none` (value: `"None"`)

* `transferredFiles` (value: `"Transferred Files"`)

* `emptyDirectories` (value: `"Empty Directories"`)

* `transferredFilesAndEmptyDirectories` (value: `"Transferred Files and Empty Directories"`)

* `transferredFilesAndDirectories` (value: `"Transferred Files and Directories"`)




