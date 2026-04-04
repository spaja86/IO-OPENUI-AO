# Deployment Documentation

## Automatic Deployment

Every time there is a push to the `main` branch, an automatic deployment is triggered. This process ensures that the latest version of your application is always live and up-to-date without manual intervention.

## Viewing Deployment Status

You can view the status of your deployment by checking the following resources:

1. **Vercel Dashboard**: Log into your Vercel account and navigate to the project dashboard. Here, you can see a list of deployments along with their status, and you can click on any deployment to view its details.

2. **GitHub Actions**: In your GitHub repository, go to the "Actions" tab. Here you will find workflows related to deployment, and you can click on any recent workflow run to see details, logs, and outcomes of the deployment process.

## Rollback to Previous Version

If you need to rollback to a previous version, follow these steps:
1. Go to the **Vercel Dashboard** and find the deployment you want to rollback to.
2. Click on the desired deployment and select the option to rollback. Vercel will redeploy that specific version.
3. If you want to also update your code repository, you can revert your last commit in the GitHub repository that made the unwanted changes and push the change to the `main` branch to trigger a new deployment.

## Troubleshooting Deployment Issues

If you encounter deployment issues, consider the following steps:
1. **Check GitHub Actions Logs**: The logs will often provide detailed error messages that can lead you to the source of the problem.
2. **Verify Vercel Configuration**: Ensure that your Vercel settings are configured correctly, including environment variables and build settings.
3. **Inspect Code Changes**: Review the changes made in the last push for any issues that might cause deployment failures.
4. **Consult Documentation**: Refer to the documentation of any libraries or frameworks you are using for any deployment-specific guidelines or common issues.
5. **Seek Help**: If you’re still having trouble, consider reaching out to the development community or checking forums for similar issues.